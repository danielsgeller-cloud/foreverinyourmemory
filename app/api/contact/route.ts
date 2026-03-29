import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create email content
    const emailBody = `
New Contact Form Submission - Forever In Your Memory

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}

Message:
${message}

---
Submitted from foreverinyourmemory.com contact form
    `.trim();

    // Send email to admin and customer
    try {
      await sendEmail({
        to: email, // Customer will get a copy
        subject: "Thank you for contacting Forever In Your Memory",
        text: `Dear ${name},

Thank you for reaching out to Forever In Your Memory. We have received your message and will respond as soon as possible.

Your message:
${message}

We appreciate your interest and look forward to helping you honor your loved one.

Best regards,
Forever In Your Memory Team`,
        replyTo: email,
      });
    } catch (emailError) {
      console.error("Failed to send contact form email:", emailError);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    // Send notification to admin
    try {
      await sendEmail({
        to: process.env.FIYM_ADMIN_EMAIL || "info@foreverinyourmemory.com",
        subject: `New Contact Form - ${name}`,
        text: emailBody,
      });
    } catch (adminEmailError) {
      console.error("Failed to send admin notification:", adminEmailError);
      // Don't fail the request if admin email fails
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: error?.message || "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
