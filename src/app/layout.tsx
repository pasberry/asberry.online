import type { Metadata } from "next";
import { Comfortaa } from 'next/font/google'
import { Taviraj } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";

const fontHeading = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Taviraj({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: "Home of Phillip of Asberry, First of His Name, Destroyer of Pipelines, Breaker of Builds",
  description: "Bacon Egg and Cheese Productions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('antialiased', fontHeading.variable, fontBody.variable)}>{children}</body>
    </html>
  )
}
