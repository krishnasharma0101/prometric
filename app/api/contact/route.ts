import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

const resend =
  process.env.RESEND_API_KEY && process.env.CONTACT_INBOX
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

const transporter =
  !resend && process.env.SMTP_HOST
    ? nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })
    : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const subject = `New inquiry from ${name}`;
    const html = `<strong>Sender:</strong> ${name}<br/>
    <strong>Email:</strong> ${email}<br/>
    <strong>Phone:</strong> ${phone ?? "N/A"}<br/><br/>
    <strong>Message:</strong><br/>${message}`;

    if (resend) {
      await resend.emails.send({
        from: "TechElevate <noreply@techelevate.institute>",
        to: process.env.CONTACT_INBOX as string,
        subject,
        html,
      });
    } else if (transporter && process.env.CONTACT_INBOX) {
      await transporter.sendMail({
        from: `"TechElevate Web" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_INBOX,
        subject,
        html,
      });
    } else {
      console.log("Contact submission", { name, email, phone, message });
    }

    return NextResponse.json(
      {
        message: "Thank you! Our team will respond shortly.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { message: "Unable to send message. Please try again later." },
      { status: 500 },
    );
  }
}

