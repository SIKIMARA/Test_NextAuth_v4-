import React from 'react'

export default function ({title,text}) {
  return (
    <div className='w-full bg-white rounded-3xl h-[250px] m-6 p-4'>
        <h1 className='font-bold text-lg text-center m-6'>{title}</h1>
        <p className='text-center'>{text}</p>
        <div className='border-t-2 border-gray-700 m-3'>
            <button className='bg-blue-500 text-white rounded-sm p-3 m-5'>Read More</button>
        </div>
    </div>
  )
}
