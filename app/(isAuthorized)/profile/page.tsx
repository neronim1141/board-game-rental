"use client";
import { useUser } from "@/components/auth/AuthProvider";
import { LogoutButton } from "@/components/auth/authButtons";

export default async function Profile() {
  const user = useUser();

  return (
    <h1>
      Hi {user.name}!
      <LogoutButton />
    </h1>
  );
}
