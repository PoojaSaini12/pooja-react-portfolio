import React from 'react'

import type { Blog as BlogType } from "../data/blog";
import { blog } from "../data/blog";

type BlogCardProps = {
  BlogItems: BlogType;
};


export default function Blog() {
  return (
    <>
    <div className='main-container'>
        <div className='text-center'>Blog</div>
    </div>

    <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" >
            {blog.map((item) =>{
                return(
                    <BlogCard BlogItems={item} key={item.id}/> 
                )
            })}
           
        </div>
        </div>
    
    </>
    
  )
}

function BlogCard({BlogItems} : BlogCardProps){
    return(
        
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
                <img alt="UI Design" className="w-full h-48 object-cover rounded-xl mb-4" src={BlogItems.img}/>
                <h2 className="text-xl font-semibold mb-2 text-black">{BlogItems.title}</h2><p className="text-gray-600 mb-4">
                    {BlogItems.body}
                </p>
                   <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">Read More</button>
                   </div>
       
    )
}
