import { NextRequest, NextResponse } from "next/server";

import { auth } from "@/auth";

const protectedRoutes = ["/dashboard", "/admin"];

export default async function middleware(req: NextRequest) {
  const session = await auth();

  const { pathname } = req.nextUrl;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
