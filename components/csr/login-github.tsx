// "use server";
// import "server-only";
import { Button } from "@/components/ui/button";
import GithubLogo from "@/public/github-mark.svg";
import Image from "next/image";
import { signIn } from "@/auth";

export default async function LoginGithub() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <Button variant="aquamarine">
        Log in with
        <Image
          title="Log in With Giigle"
          width={25}
          src={GithubLogo}
          alt="Github Logo"
        />
      </Button>
    </form>
  );
}
