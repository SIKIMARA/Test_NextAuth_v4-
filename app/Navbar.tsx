import React from 'react'
import{useSession,signIn, signOut } from "next-auth/react"
export default function 
() {
    const {data:session} = useSession()
  return (
    <div className='w-full flex justify-around bg-white h-[80px] mb-[80px]'>
       <h1 className='text-black font-bold flex items-center'>BLOG WEBSITE</h1>
        <div className='flex items-center'>
            {
                session ?
                (<button onClick={()=>{signOut({callbackUrl:"/"})}} className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-3 px-6 rounded-md ml-5'>Logout</button>)
                :
                (<button onClick={()=>{signIn("google",{callbackUrl:"/Home"})}} className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-3 px-6 rounded-md ml-5'>Login</button>)
            }
            
            
        </div>
    </div>
  )
}
