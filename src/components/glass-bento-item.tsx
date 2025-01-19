'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface GlassBentoItemProps {
  title: string
  image: string
  className?: string
}

export function GlassBentoItem({ title, image, className = '' }: GlassBentoItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl ${className}`}
      whileHover={{ scale: 1.02 }}
      animate={{
        rotateX: isHovered ? 3 : 0,
        rotateY: isHovered ? 3 : 0,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
} 