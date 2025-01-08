"use server";
import "server-only";

export default async function User() {
  return (
    <>
      <h1>Protected User Page</h1>
      <p> Welcome to the Game! Player 001!</p>
    </>
  );
}
