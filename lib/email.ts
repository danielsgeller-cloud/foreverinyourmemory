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

  if (!gmailUser || !gmailAppPassword) {
    console.error("CRITICAL: Missing FIYM_GMAIL_USER or FIYM_GMAIL_APP_PASSWORD");
    throw new Error("Email service not configured");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  await transporter.sendMail({
    from: opts.from || gmailUser,
    to: Array.isArray(opts.to) ? opts.to : [opts.to],
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
    replyTo: opts.replyTo,
  });
}
