"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

export const ThemeChanger = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  return (
    <div className="relative">
      <Button variant="outline" size="icon" onClick={toggleTheme}>
        <Sun className="absolute scale-0 dark:scale-100" />
        <Moon className="absolute scale-100 dark:scale-0" />
      </Button>
    </div>
  );
};
