// "use server";
// import "server-only";
import { Button } from "@/components/ui/button";
import GoogleLogo from "@/public/google.svg";
import Image from "next/image";
import { signIn } from "@/auth";

export default async function LoginGoogle() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <Button variant="aquamarine">
        Log in with
        <Image
          title="Log in With Giigle"
          width={25}
          src={GoogleLogo}
          alt="Github Logo"
        />
      </Button>
    </form>
  );
}
