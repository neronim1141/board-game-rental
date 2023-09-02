"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";

export const LoginButton = () => {
  return (
    <Button onClick={() => signIn()}>
      Sign in
    </Button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register"  className={buttonVariants()}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <Button  onClick={() => signOut()}>
      Sign Out
    </Button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile" className={buttonVariants()}>Profile</Link>;
};
