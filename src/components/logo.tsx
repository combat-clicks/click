'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export function Logo({ className, showText = true }: { className?: string, showText?: boolean }) {
  let transition = {
    duration: 0.5,
    ease: 'easeInOut',
  }

  return (
    <motion.svg
      variants={{ idle: {}, active: {} }}
      initial="idle"
      whileHover="active"
      width={127}
      height={34}
      viewBox="0 0 127 34"
      className={clsx(className, 'overflow-visible')}
    >
      <motion.g>
        {/* Animated head and body as one unit */}
        <motion.g
          variants={{
            idle: { y: 0 },
            active: {
              y: [-0, -0.25, 0],
              transition: {
                duration: 0.8,
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 0.3
              }
            }
          }}
        >
          <circle cx="17" cy="8" r="3" fill="currentColor"/>
          <path d="M17 11 L17 18" stroke="currentColor" strokeWidth="2"/>
        </motion.g>
        
        {/* Animated arms */}
        <motion.path
          d="M17 14 L12 12 M17 14 L22 12"
          stroke="currentColor"
          strokeWidth="2"
          variants={{
            idle: {
              d: "M17 14 L12 12 M17 14 L22 12"
            },
            active: {
              d: [
                "M17 14 L12 12 M17 14 L22 12",        // Normal position
                "M17 14 L12 13 M17 14 L22 13",        // Arms up slightly (reduced from 14 to 13)
                "M17 14 L13 14 M17 14 L21 14",        // Arms down and out (reduced from 15 to 14)
                "M17 14 L12 13 M17 14 L22 13",        // Arms up slightly (reduced from 14 to 13)
                "M17 14 L12 12 M17 14 L22 12"         // Back to normal
              ],
              transition: {
                duration: 0.8,
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0.3
              }
            }
          }}
        />
        
        {/* Animated legs */}
        <motion.path
          d="M17 18 L15 25 M17 18 L19 25"
          stroke="currentColor"
          strokeWidth="2"
          variants={{
            idle: {
              d: "M17 18 L15 25 M17 18 L19 25"
            },
            active: {
              d: [
                "M17 18 L15 25 M17 18 L19 25",     // Standing
                "M17 18 L14 20 M17 18 L20 20",     // Legs bent, preparing
                "M17 18 L17 20 M17 18 L24 18",     // First leg starts moving
                "M17 18 L20 20 M17 18 L28 18",     // First leg extends right
                "M17 18 L24 18 M17 18 L20 20",     // First leg returns, second leg starts
                "M17 18 L28 18 M17 18 L24 18",     // Second leg extends right
                "M17 18 L20 20 M17 18 L20 20",     // Both legs returning
                "M17 18 L15 25 M17 18 L19 25"      // Back to standing
              ],
              transition: {
                duration: 0.8,
                times: [0, 0.1, 0.2, 0.4, 0.6, 0.7, 0.9, 1],
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.3
              }
            }
          }}
        />
      </motion.g>
      
      {/* Company Name Text - only show if showText is true */}
      {showText && (
        <text
          x="45"
          y="22"
          className="font-bold tracking-tight"
          fill="currentColor"
          style={{ fontSize: '22px' }}
        >
          Combat Clicks Photography
        </text>
      )}
    </motion.svg>
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 34 34" fill="currentColor" className={className}>
      <circle cx="17" cy="8" r="3"/>
      <path d="M17 11 L17 18" strokeWidth="2"/>
      <path d="M17 14 L12 12 M17 14 L22 12" strokeWidth="2"/>
      <path d="M17 18 L15 25 M17 18 L19 25" strokeWidth="2"/>
    </svg>
  )
}
