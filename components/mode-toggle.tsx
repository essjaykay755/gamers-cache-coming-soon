"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  // Initialize theme if not set
  useEffect(() => {
    if (!theme || theme === "system") {
      // Default to dark if system is dark, otherwise light
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(isDarkMode ? "dark" : "light")
    }
  }, [theme, setTheme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  
  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="dark:bg-gray-800/50 bg-white/70 border-white/20 dark:border-white/10 rounded-md h-12 w-12"
    >
      {theme === "light" ? (
        <Sun className="h-[1.4rem] w-[1.4rem]" />
      ) : (
        <Moon className="h-[1.4rem] w-[1.4rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

