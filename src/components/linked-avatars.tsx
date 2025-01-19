'use client'

import { CheckIcon } from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

const transition = {
  duration: 0.75,
  repeat: Infinity,
  repeatDelay: 1.25,
}

function Rings() {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      className={clsx(
        'col-start-1 row-start-1 size-full',
        '[mask-composite:intersect] [mask-image:linear-gradient(to_bottom,black_90%,transparent),radial-gradient(circle,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)]',
      )}
    >
      {Array.from(Array(42).keys()).map((n) => (
        <motion.circle
          variants={{
            idle: {
              scale: 1,
              strokeOpacity: 0.15,
            },
            active: {
              scale: [1, 1.08, 1],
              strokeOpacity: [0.15, 0.3, 0.15],
              transition: { ...transition, delay: n * 0.05 },
            },
          }}
          key={n}
          cx="250"
          cy="250"
          r={n * 14 + 4}
          className="stroke-white"
        />
      ))}
    </svg>
  )
}

function PhoneIcon() {
  return (
    <div className="z-10 col-start-1 row-start-1 flex items-center justify-center">
      <motion.div
        variants={{
          idle: { scale: 1 },
          active: {
            scale: [1, 1.15, 1],
            transition: { ...transition, duration: 0.75 },
          },
        }}
        className="flex size-6 items-center justify-center rounded-full bg-gradient-to-t from-green-500 to-green-300 shadow"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="size-4 fill-white"
        >
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
        </svg>
      </motion.div>
    </div>
  )
}

function Photos() {
  return (
    <div className="z-10 col-start-1 row-start-1">
      <div className="mx-auto flex size-full max-w-md items-center justify-around">
        <img
          alt=""
          src="/linked-avatars/customer.jpg"
          className="size-20 rounded-full bg-white/15 ring-4 ring-white/10"
        />
        <img
          alt=""
          src="/linked-avatars/manager.jpg"
          className="size-20 rounded-full bg-white/15 ring-4 ring-white/10"
        />
      </div>
    </div>
  )
}

export function LinkedAvatars() {
  return (
    <div aria-hidden="true" className="isolate mx-auto grid h-full grid-cols-1">
      <Rings />
      <div className="z-10 col-start-1 row-start-1">
        <div className="mx-auto flex size-full max-w-md items-center justify-around">
          {/* Person Icon */}
          <div className="relative size-20 rounded-full bg-gray-800 flex items-center justify-center ring-4 ring-white/10">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-12 h-12 text-gray-400"
            >
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Question Mark Logo */}
          <div className="relative size-20 rounded-full bg-gray-800 flex items-center justify-center ring-4 ring-white/10">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-12 h-12 text-gray-400"
            >
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <PhoneIcon />
    </div>
  )
}
