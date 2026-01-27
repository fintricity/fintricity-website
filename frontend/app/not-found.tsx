"use client"

import Link from "next/link"
import { Button } from "@/components/button"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-center px-4">
      <div className="max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="text-9xl font-bold text-fintricity-navy/10">404</div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-fintricity-navy mb-4"
        >
          Agent Lost in the Mesh
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-fintricity-charcoal mb-8"
        >
          It seems the page you are looking for has been hallucin.. err, temporarily displaced. Our autonomous agents are currently conducting a search and rescue operation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <Button asChild variant="cyan" size="lg">
            <Link href="/">Return to Base (Home)</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Report Missing Link</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
