"use server";
import "server-only";
import { signIn, signOut } from "@/auth";

export const loginGithub = async () => {
  await signIn("github", { redirectTo: "/dashboard" });
};
export const loginGoogle = async () => {
  await signIn("google", { redirectTo: "/dashboard" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};
