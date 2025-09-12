import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "onlyakr2477@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}
