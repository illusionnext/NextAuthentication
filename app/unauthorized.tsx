import LoginGithub from "@/components/csr/login-github";

export default function Unauthorized() {
  return (
    <main className="grid place-content-center place-items-center min-h-screen">
      <h1 className="text-rose-700">401 - Unauthorized</h1>
      <p>Please log in to access this page.</p>
      <LoginGithub />
    </main>
  );
}
