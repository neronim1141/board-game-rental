"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const GoBackButton = () => {
  const router = useRouter();
  return <Button onClick={() => router.back()}>Sign in</Button>;
};
