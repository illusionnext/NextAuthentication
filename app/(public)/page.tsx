import LoginGithub from "@/components/csr/login-github";
import LoginGoogle from "@/components/csr/login-google";

export default async function Home() {
  return (
    <>
      <h1>Public Home</h1>

      <LoginGithub />
      <LoginGoogle />
    </>
  );
}
