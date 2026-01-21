"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Brand colors for reference
// Blue: #0F172A (Slate-900 like) -> using tailored hex if needed, or tailwind classes
// Plum: #a21caf (Purple-700 like)
// Orange: #f97316 (Orange-500 like)

const nodes = [
  { id: "orch", x: 50, y: 50, label: "Orchestrator", color: "bg-kendra-blue", size: 24 },
  { id: "reason", x: 20, y: 20, label: "Reasoning", color: "bg-kendra-plum", size: 16 },
  { id: "memory", x: 80, y: 20, label: "Memory", color: "bg-kendra-plum", size: 16 },
  { id: "tools", x: 20, y: 80, label: "Tools", color: "bg-kendra-orange", size: 16 },
  { id: "data", x: 80, y: 80, label: "Data Fabric", color: "bg-kendra-blue", size: 16 },
]

const connections = [
  { from: "orch", to: "reason" },
  { from: "orch", to: "memory" },
  { from: "orch", to: "tools" },
  { from: "orch", to: "data" },
  { from: "reason", to: "memory" }, // Reasoning accesses memory
]

export function PlatformVisualization() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return <div className="w-full aspect-video bg-gray-50 rounded-xl animate-pulse" />

  return (
    <div className="w-full aspect-video bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-[80%] h-[80%]">
          
          {/* Connections (SVG Lines) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            {connections.map((conn, i) => {
              const start = nodes.find(n => n.id === conn.from)!
              const end = nodes.find(n => n.id === conn.to)!
              
              return (
                <g key={i}>
                  {/* Static Line */}
                  <line 
                    x1={`${start.x}%`} y1={`${start.y}%`} 
                    x2={`${end.x}%`} y2={`${end.y}%`} 
                    stroke="#e2e8f0" 
                    strokeWidth="2" 
                  />
                  {/* Animated Pulse Packet */}
                  <motion.circle r="3" fill="#a21caf">
                    <animateMotion 
                      dur={`${2 + i * 0.5}s`} 
                      repeatCount="indefinite" 
                      path={`M${start.x * 0.01 * 500},${start.y * 0.01 * 300} L${end.x * 0.01 * 500},${end.y * 0.01 * 300}`} // Approximate coord mapping for SVG path? No, simpler to use framer variants on a div
                    />
                    {/* SVG path animation is tricky with percentage coords. Let's stick to standard framer motion lines or just CSS dashes */}
                  </motion.circle>
                  
                  {/* Moving Dash */}
                  <motion.line 
                    x1={`${start.x}%`} y1={`${start.y}%`} 
                    x2={`${end.x}%`} y2={`${end.y}%`} 
                    stroke="#6366f1" 
                    strokeWidth="2" 
                    strokeDasharray="4 8"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -24 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    opacity={0.6}
                  />
                </g>
              )
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              className={`absolute flex flex-col items-center justify-center z-10 -translate-x-1/2 -translate-y-1/2`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.1 }}
            >
              {/* Outer Glow Ring */}
              <motion.div 
                className={`absolute inset-0 rounded-full ${node.color} opacity-20 blur-md`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                style={{ width: node.size * 3, height: node.size * 3 }}
              />
              
              {/* Core Node */}
              <div 
                className={`rounded-full ${node.color} shadow-lg border-2 border-white flex items-center justify-center`}
                style={{ width: node.size * 2.5, height: node.size * 2.5 }}
              >
                {/* Optional Icon/Initials */}
                <span className="text-white text-[10px] font-bold">
                  {node.id === "orch" ? "CORE" : ""}
                </span>
              </div>

              {/* Label */}
              <div className="mt-3 px-3 py-1 bg-white/90 backdrop-blur rounded-full shadow-sm border border-gray-100 text-xs font-medium text-gray-600 whitespace-nowrap">
                {node.label}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  )
}
