import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tailwind Playground',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
        <Link href='/' className="border-solid border-2 p-1 m-1">Home</Link>
        <Link href='/CardContainer' className="border-solid border-2 p-1 m-1">Cards</Link>
        <Link href='/FramrMotionTest' className="border-solid border-2 p-1 m-1">Motion</Link>
        <Link href='/FramrMotionTest2' className="border-solid border-2 p-1 m-1">Motion II</Link>
        <Link href='/FramrMotionTest3' className="border-solid border-2 p-1 m-1">Motion III</Link>
        <Link href='/FramrMotionTest4' className="border-solid border-2 p-1 m-1">Motion IV</Link>
      </div>
        {children}
      </body>
    </html>
  )
}
