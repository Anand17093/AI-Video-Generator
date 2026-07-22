// import { Image } from 'lucide-react'
// import React from 'react'

// const options=[
//     {
//         name:'Realistic',
//         image:'/'
//     },
//     {
//         name:'Cinematic',
//         image:'/'
//     },
//     {
//         name:'Cartoon',
//         image:'/'
//     },
//     {
//         name:'Watercolor',
//         image:'/'
//     },
//     {
//         name:'Cyberpunk',
//         image:'/'
//     },
//     {
//         name:'GTA',
//         image:'/'
//     },
//     {
//         name:'Anime',
//         image:'/C:\Users\ASUS\Desktop\webD\.vscode\ai-video-generator\public\Anime.jpg'
//     },
// ]

// function VideoStyle(onHandleInputChange) {
//   return (
//     <div className='mt-5'>
//         <h2>Video Styles</h2>
//         <p className='text-sm text-gray-400 mb-1'>Select Video Styles</p>
//         <div>
//             {options?.map((option,index)=>(
//                 <Image src={option.image} alt={option.name} width={500} height={120} />
//             ))}
//         </div>



//     </div>
//   )
// }

// export default VideoStyle

'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export const options = [
  { name: 'Realistic', image: '/realistic.jpg' },
  { name: 'Cinematic', image: '/Cinematic.jpg' },
  { name: 'Cartoon', image: '/Cartoon.jpg' },
  { name: 'Watercolor', image: '/Watercolor.jpg' },
  { name: 'Cyberpunk', image: '/Cyberpunk.jpg' },
  { name: 'GTA', image: '/GTA.jpg' },
  { name: 'Anime', image: '/Anime.jpg' },
]

function VideoStyle({ onHandleInputChange }) {
    const [selectedStyle , setSelectedStyle]= useState();
  return (
    <div className='mt-5'>
      <h2>Video Styles</h2>
      <p className='text-sm text-gray-400 mb-1'>Select Video Styles</p>
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2'>
        {options.map((option, index) => (
            <div className='relative' onClick={()=>{setSelectedStyle(option.name);
                onHandleInputChange('videostyle',option.name)
            }}>
              <Image
                src={option.image}
                alt={option.name}
                width={500}
                height={120}
                className={`object-cover h-[90px] lg:h-[130px] xl:h-[180px] rounded-lg p-1  hover:border border-gray-300 cursor-pointer
                ${option.name==selectedStyle && 'border' }`}
              />
            <h2 className='absolute bottom-1 text-center w-full font-bold'>{option.name}</h2>
            {/* <p className='text-center text-sm mt-1'>{option.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoStyle
