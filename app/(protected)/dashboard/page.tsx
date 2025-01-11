// "use server";
// import "server-only";
// import Image from "next/image";
// import LogoutButton from "@/components/csr/log-out";
import { Suspense } from "react";
// import { auth } from "@/auth";
import Profile from "@/lib/server-session";
import LogoutButton from "@/components/csr/logout";

// export default async function User() {
//   const session = await auth();
//   return (
//     <>
//       <h1 className="text-violet-600">Next Auth v5 Beta + Next 15 Canary</h1>
//       <p>
//         User signed in with the name:{" "}
//         <strong className="text-green-400">{session?.user?.name}</strong>
//       </p>
//       <p>
//         {" "}
//         User signed in with the email:{" "}
//         <strong className="text-green-400">{session?.user?.email}</strong>
//       </p>
//       <Image
//         className="rounded-full"
//         src={session?.user?.image ?? "/github-mark.svg"}
//         alt={session?.user?.name ?? "User Image"}
//         width={50}
//         height={50}
//       />
//       <LogoutButton />
//     </>
//   );
// }

export const experimental_ppr = true;

export default async function DashboardPage() {
  // const session = await auth();

  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<p>Loading profile...</p>}>
        <Profile />
      </Suspense>
      <Suspense fallback={<p>Loading content...</p>}>
        {/* This component will be dynamically rendered */}
        <DynamicContent />
      </Suspense>
      <LogoutButton />
    </div>
  );
}

async function DynamicContent() {
  // Fetch some data or perform some async operation
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <p>This content was dynamically rendered.</p>;
}
