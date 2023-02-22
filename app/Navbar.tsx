import React from 'react'
import{useSession,signIn, signOut } from "next-auth/react"
export default function 
() {
    const {data:session} = useSession()
  return (
    <div className='w-full flex justify-around bg-white h-[80px] mb-[80px]'>
       <h1 className='text-black font-bold flex items-center'>LOGO</h1>
        <div className='flex items-center'>
            {
                session ?
                (<button onClick={()=>{signOut()}} className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white p-3 rounded-md ml-5'>Logout</button>)
                :
                (<button onClick={()=>{signIn("google")}} className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white p-3 rounded-md ml-5'>Login</button>)
            }
            
            
        </div>
    </div>
  )
}
