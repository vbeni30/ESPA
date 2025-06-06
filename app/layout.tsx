import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout children={children} />
}


import './globals.css'
