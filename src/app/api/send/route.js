import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_eLwR1D8P_BtgaustkYWwfn9nbey1LGFWV');

export async function POST(req, res) {
  const { email, subject, message, from, name } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "admin@piercej.com",
      to: ["piercejord@gmail.com", email],
      subject: subject,
      react: (
        <>
          <p>Dear {name},</p>
          <p>Thank you for contacting us!</p>
          <p>Your message has been submitted to us and we will respond as soon as we can.</p>
          <p><strong>Message you sent: </strong><em>{message}</em></p>
          <p>{from}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}