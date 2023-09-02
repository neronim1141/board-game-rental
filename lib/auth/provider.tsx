"use client";
import { PropsWithChildren, createContext } from "react";
import { Session } from "next-auth";
import { contextWrapper } from "@/lib/utils";

const AuthContext = createContext<Required<Session>["user"] | undefined>(
  undefined
);
interface AuthProviderProps extends PropsWithChildren {
  user: Required<Session>["user"];
}

export const AuthProvider = ({ user, children }: AuthProviderProps) => {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useUser = contextWrapper(AuthContext);
