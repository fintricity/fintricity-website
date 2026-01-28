"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/button"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    // Here you would handle the actual login logic
    console.log("Login attempted with:", email)
  }

  return (
    <div className="min-h-screen flex w-full">
      
      {/* Left Side: Fintricity Brand Experience */}
      <div className="hidden lg:flex w-1/2 bg-fintricity-navy relative flex-col justify-between p-16 text-white overflow-hidden">
        
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
             <path d="M0 100 C 50 0 80 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
           </svg>
        </div>

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <img 
            src="/logo.svg" 
            alt="Fintricity" 
            className="h-12 w-auto brightness-0 invert" 
          />
          <span className="text-2xl font-bold tracking-tight">Fintricity</span>
        </div>

        {/* Brand Description */}
        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-fintricity-cyan uppercase bg-fintricity-cyan/10 rounded-full border border-fintricity-cyan/20">
              System Access
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Enter the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Fintricity Platform</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              The Unified Operating System for the Agentic Enterprise. Build, deploy, and govern autonomous AI agents that reason, collaborate, and execute at scale.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div>
                <h3 className="font-bold text-white mb-1">Unified Intelligence</h3>
                <p className="text-sm text-blue-200">Contextual state persistence across long-running workflows.</p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Modern Delivery</h3>
                <p className="text-sm text-blue-200">AI-augmented pods for rapid modernization.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer info */}
        <div className="relative z-10 text-sm text-blue-300/60">
          © {new Date().getFullYear()} Fintricity Inc. All systems operational.
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 px-8">
        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-fintricity-navy mb-2">Welcome back</h2>
            <p className="text-gray-500">Sign in to access your Workbench</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-fintricity-charcoal mb-1">
                Work Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-fintricity-navy focus:border-transparent outline-none transition-all"
                placeholder="name@company.com"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-fintricity-charcoal">
                  Password
                </label>
                <Link href="#" className="text-sm text-fintricity-navy hover:text-fintricity-teal font-medium">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-fintricity-navy focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full py-6 text-lg" 
              variant="default" // Using default which is Navy
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Authenticating...
                </div>
              ) : (
                "Sign In to Platform"
              )}
            </Button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center w-full px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="text-sm font-medium text-fintricity-charcoal">Google</span>
              </button>
              <button className="flex items-center justify-center w-full px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 23 23">
                  <path fill="#f3f3f3" d="M0 0h23v23H0z"/>
                  <path fill="#f35325" d="M1 1h10v10H1z"/>
                  <path fill="#81bc06" d="M12 1h10v10H12z"/>
                  <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                  <path fill="#ffba08" d="M12 12h10v10H12z"/>
                </svg>
                <span className="text-sm font-medium text-fintricity-charcoal">Microsoft</span>
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center text-xs text-gray-400">
            <Link href="/" className="hover:text-fintricity-navy underline">Back to Website</Link>
          </div>

        </div>
      </div>
    </div>
  )
}
