import '@/styles/tailwind.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="h-full bg-[#FFFFFFCC]">{children}</body>
    </html>
  )
} 