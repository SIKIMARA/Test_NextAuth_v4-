import React from 'react'
import BlogCard from '../../components/BlogCard'
const data = [
    {
        title: 'Blog 1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        title: 'Blog 2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
        title: 'Blog 3',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
]
export default function Home() {
  return (
    <div className='w-3/4 m-auto'>
        {data.map((item,index) => <BlogCard key={index} title={item.title} text={item.text} />)  }
    </div>
  )
}
