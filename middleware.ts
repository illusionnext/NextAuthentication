import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

const protectedRoutes = ["/users"];

// middleware runs on every route
export default async function middleware(req: NextRequest) {
  const session = await auth(); // get the session

  const { pathname } = req.nextUrl; // get the pathname from the request URL

  const isProtected = protectedRoutes.some(
    (route) => pathname.startsWith(route), // check if the pathname starts with a protected route
  );

  // if the route is protected and the user is not signed in, redirect to the sign-in page
  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.nextUrl)); // redirect to the sign-in page
  } // /api/auth/signin provided automatically by NextAuth
  return NextResponse.next(); // continue to the next middleware
}
