// components/ui/theme-toggle.tsx

"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  // Get both the current theme and the function to set it
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    // If the current theme is dark, switch to light. Otherwise, switch to dark.
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="themetoggle"
      size="icon"
      className="h-9 w-9 cursor-pointer"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}