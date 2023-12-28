import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/ThemeProvider"
import { ModeToggle } from '@/components/ModeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ModeToggle>
            </ModeToggle>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}