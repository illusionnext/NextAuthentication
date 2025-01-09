"use client";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/actions/auth";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  return (
    <Button variant="aquamarine" onClick={() => logout()}>
      Log out <LogOut />
    </Button>
  );
}
