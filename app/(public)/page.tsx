"use server";
import "server-only";
import LoginButton from "@/components/csr/login-button";
import { auth } from "@/auth";
import { Suspense } from "react";
import { unauthorized } from "next/navigation";
import Link from "next/link";
import LogoutButton from "@/components/csr/log-out";

export default async function LogIn() {
  const session = await auth(); // auth gives us the session with the user data

  if (!session) {
    unauthorized();
  }

  if (session?.user) {
    return (
      <>
        <Link href="/users">Users 👆</Link>
        <LogoutButton />
      </>
    );
  }

  return (
    <div className="grid place-content-center place-items-center min-h-screen">
      <Suspense fallback="Loading...">
        <p>Log in to access the game!</p>
        <LoginButton />
      </Suspense>
    </div>
  );
}
