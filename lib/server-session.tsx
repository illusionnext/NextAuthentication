"use server";
import "server-only";
import { auth } from "@/auth";
import Image from "next/image";
import ClientProfile from "@/lib/client-session";

async function ServerProfile() {
  const session = await auth();
  return session ? (
    <>
      <p>
        User signed in with the name:{" "}
        <strong className="text-green-400">{session?.user?.name}</strong>
      </p>
      <p>
        Signed in as{" "}
        <strong className="text-green-400">{session?.user?.email}</strong>
      </p>
      <Image
        className="rounded-full"
        src={session?.user?.image ?? "/github-mark.svg"}
        alt={session?.user?.name ?? "User Image"}
        width={50}
        height={50}
      />
    </>
  ) : (
    <p>Not signed in</p>
  );
}

export default async function Profile() {
  if (typeof window === undefined) {
    return <ServerProfile />;
  } else {
    return <ClientProfile />;
  }
}
