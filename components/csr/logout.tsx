// "use server";
// import "server-only";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
import { LogOut } from "lucide-react";

export default async function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <Button type="submit" variant="aquamarine">
        Log out
        <LogOut />
      </Button>
    </form>
  );
}
