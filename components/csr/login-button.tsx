"use client";
import { Button } from "@/components/ui/button";
import GithubLogo from "@/public/github-mark.svg";
import Image from "next/image";
import { login } from "@/lib/actions/auth";

export default function LoginButton() {
  return (
    <Button variant="aquamarine" onClick={() => login()}>
      Log in with
      <Image
        title="Log in With Github"
        width={25}
        src={GithubLogo}
        alt="Github Logo"
      />
    </Button>
  );
}
