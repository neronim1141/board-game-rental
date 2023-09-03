"use client";
import { AuthProvider } from "@/lib/auth/auth.provider";
import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "next-themes";
import React from "react";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}
