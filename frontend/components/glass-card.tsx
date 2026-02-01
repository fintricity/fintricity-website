"use client"

import { motion } from "framer-motion"

export function GlassCard({ children, className = "", ...props }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
      className={`rounded-2xl border border-fintricity-card-border bg-white p-8 shadow-sm transition-all duration-300 hover:border-fintricity-cyan/30 group ${className}`} 
      {...props}
    >
      {children}
    </motion.div>
  )
}