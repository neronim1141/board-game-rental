import { type ClassValue, clsx } from "clsx";
import { Context, useContext } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const contextWrapper =
  <T>(context: Context<T>) =>
  () => {
    const ctx = useContext(context);
    if (!ctx) throw new Error(`${context.displayName} is not Provided`);
    return ctx;
  };
