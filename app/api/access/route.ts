import { createHmac } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const supplied = typeof body.password === "string" ? body.password : "";
    const expected = process.env.ACADEMY_GATE_PASSWORD;
    const secret = process.env.ACADEMY_GATE_SECRET;
    if (!expected || !secret || supplied.length > 256 || supplied !== expected) {
      return NextResponse.json({ error: "Incorrect access password." }, { status: 401 });
    }

    const token = createHmac("sha256", secret).update("durckheim-academy-gate-v1").digest("hex");
    const response = NextResponse.json({ ok: true });
    response.cookies.set("academy_gate", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8,
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Unable to verify access. Please try again." }, { status: 400 });
  }
}
