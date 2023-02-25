"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import LoginCard from './LoginCard'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className='p-5 bg-white rounded-md w-1/3 mx-auto text-black divide-y divide-blue-200'>
      <h1 className='p-5'>HOME</h1>
      <div className='p-5 space-y-4'>
          
          <h1 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500'>User Information</h1>
          <div className='p-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md  mx-auto flex flex-col justify-center text-white font-bold'>
            
            <img src={session.user?.image!} width={100} height={100} className='rounded-full mx-auto'/>
            <h1 className='text-2xl'>{session.user?.name!}</h1>
            <h1 className='text-xl'>{session.user?.email}</h1>
          </div>
          <button onClick={()=>{signOut()}}  className='flex items-center justify-center w-full p-3 mt-5 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500'>
              <svg className='w-6 h-6 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M20 12H4'></path>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4l8 8-8 8'></path>
              </svg>
              <span>Sign Out</span>
          </button>
      </div>
  </div>
    )
  }
  return (
    < LoginCard/>
  )
}
