import nodemailer from "nodemailer";

type SendEmailOptions = {
  to: string | string[];
  subject: string;
  text: string;
  html?: string;
  from?: string;
  replyTo?: string;
};

export async function sendEmail(opts: SendEmailOptions) {
  const gmailUser = process.env.FIYM_GMAIL_USER;
  const gmailAppPassword = process.env.FIYM_GMAIL_APP_PASSWORD;
  const adminEmail = process.env.FIYM_ADMIN_EMAIL;

  if (!gmailUser || !gmailAppPassword) {
    console.error("CRITICAL: Missing FIYM_GMAIL_USER or FIYM_GMAIL_APP_PASSWORD");
    throw new Error("Email service not configured");
  }

  // Create transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  // Build recipient list
  const originalRecipients = Array.isArray(opts.to) ? opts.to : [opts.to];
  const allRecipients = [...originalRecipients];

  // Special handling: if email is sent to info@foreverinyourmemory.com,
  // also send to info@picturesinceramic.com, danielsgeller@gmail.com, and ginna.geller@gmail.com
  const foreverMemoryEmail = "info@foreverinyourmemory.com";
  const danielEmail = "danielsgeller@gmail.com";
  const ginnaEmail = "ginna.geller@gmail.com";
  const picEmail = "info@picturesinceramic.com";

  if (originalRecipients.includes(foreverMemoryEmail)) {
    // Add danielsgeller@gmail.com if not already in list
    if (!allRecipients.includes(danielEmail)) {
      allRecipients.push(danielEmail);
    }
    // Add ginna.geller@gmail.com if not already in list
    if (!allRecipients.includes(ginnaEmail)) {
      allRecipients.push(ginnaEmail);
    }
    // Add info@picturesinceramic.com if not already in list
    if (!allRecipients.includes(picEmail)) {
      allRecipients.push(picEmail);
    }
  }

  // Send email
  await transporter.sendMail({
    from: opts.from || gmailUser,
    to: allRecipients,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
    replyTo: opts.replyTo,
  });
}
