import { createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

function expectedToken() {
  const secret = process.env.ACADEMY_GATE_SECRET;
  if (!secret) return null;
  return createHmac("sha256", secret).update("durckheim-academy-gate-v1").digest("hex");
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname === "/access" || pathname.startsWith("/api/access")) return NextResponse.next();

  const expected = expectedToken();
  const supplied = request.cookies.get("academy_gate")?.value ?? "";
  if (expected && supplied.length === expected.length) {
    const a = Buffer.from(expected, "hex");
    const b = Buffer.from(supplied, "hex");
    if (a.length === b.length && timingSafeEqual(a, b)) return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/access";
  url.search = "";
  url.searchParams.set("next", pathname + request.nextUrl.search);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|durckheim-logo\\.(?:png|webp)|api/access).*)"],
};
