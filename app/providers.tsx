"use client";
import { AuthProvider } from "@/lib/auth/auth.provider";
import { Session } from "next-auth";

import { ThemeProvider } from "next-themes";
import React from "react";
import { PropsWithChildren } from "react";

interface ProvidersProps extends PropsWithChildren {
  user?: Required<Session>["user"];
}
export function Providers({ children, user }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <AuthProvider user={user}>{children}</AuthProvider>
    </ThemeProvider>
  );
}
