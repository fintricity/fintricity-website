"use client"

import { motion } from "framer-motion"

export function GlassCard({ children, className = "", ...props }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`rounded-2xl border border-gray-200 bg-white p-8 shadow-lg h-full group ${className}`} 
      {...props}
    >
      {children}
    </motion.div>
  )
}
