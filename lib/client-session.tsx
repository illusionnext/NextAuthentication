"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ClientProfile() {
  const { data: session } = useSession();
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
