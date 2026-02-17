import { NextResponse } from "next/server";

export async function GET() {
  const number = process.env.WHATSAPP_NUMBER!;
  const text = encodeURIComponent(process.env.WHATSAPP_DEFAULT_TEXT || "Hello");

  return NextResponse.redirect(`https://wa.me/${number}?text=${text}`, {
    status: 302,
  });
}
