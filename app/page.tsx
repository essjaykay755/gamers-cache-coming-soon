"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/new-components/mode-toggle"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import {
  Cpu,
  CpuIcon,
  HardDrive,
  MemoryStickIcon as Memory,
  MonitorPlay,
  MousePointer2,
  Headphones,
} from "lucide-react"
import Image from "next/image"

export default function Home() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [email, setEmail] = useState("")

  // Calculate time until launch date
  useEffect(() => {
    setMounted(true)

    const launchDate = new Date("June 1, 2025 00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this to your backend
    alert(`Thank you! We'll notify ${email} when we launch.`)
    setEmail("")
  }

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen flex flex-col transition-colors duration-500 dark:bg-[#292929] bg-[#e4e2dd] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-10 grid-rows-10">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border border-current"></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <div className="relative h-10 w-10 md:h-12 md:w-12">
          {theme === "dark" ? (
            <Image src="/images/logo-icon-dark.png" alt="GamersCache Icon" fill className="object-contain" priority />
          ) : (
            <Image src="/images/logo-icon-light.png" alt="GamersCache Icon" fill className="object-contain" priority />
          )}
        </div>
        <ModeToggle />
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 relative z-10">
        <div className="max-w-4xl w-full space-y-16 py-12">
          {/* Logo and Intro */}
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="relative h-72 w-full md:h-[400px] md:w-[800px] mb-4 transform hover:scale-105 transition-transform duration-300">
              {theme === "dark" ? (
                <Image src="/images/logo-dark.png" alt="GamersCache.com" fill className="object-contain" priority />
              ) : (
                <Image src="/images/logo-light.png" alt="GamersCache.com" fill className="object-contain" priority />
              )}
            </div>

            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight dark:text-white text-gray-800 leading-tight">
                Powering Your <span className="text-red-600">Gaming Future</span>
              </h1>
              <p className="text-xl md:text-2xl dark:text-gray-300 text-gray-600">
                Premium pre-owned computer and gaming components at prices that make sense.
              </p>
            </div>
          </div>

          {/* Countdown */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ba3838]/20 to-transparent dark:from-[#ba3838]/20 blur-xl -z-10 rounded-3xl"></div>
            <div className="bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center dark:text-white text-gray-800">
                Launching In
              </h2>

              <div className="grid grid-cols-4 gap-2 md:gap-6">
                <div className="flex flex-col items-center p-4 md:p-6 rounded-xl bg-white/20 dark:bg-white/5 backdrop-blur-sm shadow-lg border border-white/20 dark:border-white/10 transform hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl md:text-5xl lg:text-6xl font-bold dark:text-white text-gray-800 tabular-nums">
                    {timeLeft.days}
                  </span>
                  <span className="text-sm md:text-base dark:text-gray-300 text-gray-600 mt-2">Days</span>
                </div>
                <div className="flex flex-col items-center p-4 md:p-6 rounded-xl bg-white/20 dark:bg-white/5 backdrop-blur-sm shadow-lg border border-white/20 dark:border-white/10 transform hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl md:text-5xl lg:text-6xl font-bold dark:text-white text-gray-800 tabular-nums">
                    {timeLeft.hours}
                  </span>
                  <span className="text-sm md:text-base dark:text-gray-300 text-gray-600 mt-2">Hours</span>
                </div>
                <div className="flex flex-col items-center p-4 md:p-6 rounded-xl bg-white/20 dark:bg-white/5 backdrop-blur-sm shadow-lg border border-white/20 dark:border-white/10 transform hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl md:text-5xl lg:text-6xl font-bold dark:text-white text-gray-800 tabular-nums">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-sm md:text-base dark:text-gray-300 text-gray-600 mt-2">Minutes</span>
                </div>
                <div className="flex flex-col items-center p-4 md:p-6 rounded-xl bg-white/20 dark:bg-white/5 backdrop-blur-sm shadow-lg border border-white/20 dark:border-white/10 transform hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl md:text-5xl lg:text-6xl font-bold dark:text-white text-gray-800 tabular-nums">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-sm md:text-base dark:text-gray-300 text-gray-600 mt-2">Seconds</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center dark:text-white text-gray-800">
              Premium Components Coming Soon
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {[
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path d="M2 10h20" />
                      <path d="M6 15h4" />
                      <path d="M14 15h4" />
                      <path d="M6 18h4" />
                      <path d="M14 18h4" />
                    </svg>
                  ), 
                  name: "Graphics Cards" 
                },
                { icon: <Cpu className="h-8 w-8" />, name: "Processors" },
                { icon: <Memory className="h-8 w-8" />, name: "Memory" },
                { icon: <HardDrive className="h-8 w-8" />, name: "Storage" },
                { icon: <MonitorPlay className="h-8 w-8" />, name: "Monitors" },
                { icon: <MousePointer2 className="h-8 w-8" />, name: "Peripherals" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-xl bg-white/20 dark:bg-white/5 backdrop-blur-sm shadow-lg border border-white/20 dark:border-white/10 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-500/10 text-red-600 mb-3">
                    {item.icon}
                  </div>
                  <span className="text-center dark:text-gray-200 text-gray-700">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-l from-[#ba3838]/20 to-transparent dark:from-[#ba3838]/20 blur-xl -z-10 rounded-3xl"></div>
            <div className="bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center dark:text-white text-gray-800">
                  Be First In Line
                </h2>
                <p className="text-center mb-6 dark:text-gray-300 text-gray-600">
                  Get notified when we launch and receive exclusive early access deals.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 dark:bg-gray-800/50 dark:text-white bg-white/70 text-gray-800 h-12 px-4 border-white/20 dark:border-white/10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white h-12 px-8 font-medium">
                    Notify Me
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center dark:text-gray-400 text-gray-600 relative z-10">
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Headphones className="h-4 w-4 dark:text-red-500 text-red-600" />
            <span className="text-sm">support@gamerscache.com</span>
          </div>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} GamersCache.com. All rights reserved.</p>
      </footer>
    </main>
  )
}

