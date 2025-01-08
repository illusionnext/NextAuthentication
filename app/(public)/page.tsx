"use server";
import "server-only";
import LoginButton from "@/components/csr/login-button";
import { auth } from "@/auth";
import { Suspense } from "react";
import { unauthorized } from "next/navigation";

export default async function LogIn() {
  const session = await auth(); // auth gives us the session with the user data

  if (!session) {
    unauthorized();
  }

  if (session?.user) {
    return <p>Logged in as {session.user.name}</p>;
  }

  return (
    <Suspense fallback="Loading...">
      <p>Log in to access the game!</p>
      <LoginButton />
    </Suspense>
  );
}
