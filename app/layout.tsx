import './globals.css'
import Nav from '@/components/Nav'
import Footer from "@/components/Footer";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJS study application',
  description: 'App generated to study NextJS front-end paired with Laravel API back-end',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

        <body className={inter.className}>
          <div className="bg-blue-50">
            <div className="max-w-xl px-8 mx-a">
              <Nav />
            </div>
            <div className="mt-8">
              {children}
            </div>
            <div className="max-w-xl px-8 mx-a">
              <Footer />
            </div>
          </div>
        </body>
    </html>
  )
}
