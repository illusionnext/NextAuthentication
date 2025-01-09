"use server";
import "server-only";
import Image from "next/image";
import { auth } from "@/auth";
import LogoutButton from "@/components/csr/log-out";

export default async function User() {
  const session = await auth();
  return (
    <>
      <h1 className="text-violet-600">Next Auth v5 Beta + Next 15 Canary</h1>
      <p>
        User signed in with the name:{" "}
        <strong className="text-green-400">{session?.user?.name}</strong>
      </p>
      <p>
        {" "}
        User signed in with the email:{" "}
        <strong className="text-green-400">{session?.user?.email}</strong>
      </p>
      <Image
        className="rounded-full"
        src={session?.user?.image ?? "/github-mark.svg"}
        alt={session?.user?.name ?? "User Image"}
        width={50}
        height={50}
      />
      <LogoutButton />
    </>
  );
}
