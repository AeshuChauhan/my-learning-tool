import Image from 'next/image'
import { Inter } from 'next/font/google'
import useAuth from '@/appwrite/auth-services/useAuth'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_APPWRITE_URL,"DASDA")
  useAuth()
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
     Hello Git
    </main>
  )
}
