import React, { useState } from 'react'

const options = [
  {
    name: 'Youtuber',
    style: 'text-yellow-400 text-3xl font-extrabold uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg'
  },
  {
    name: 'Supreme',
    style: 'text-white text-3xl font-bold italic tracking-wide drop-shadow-md px-3 py-1 rounded-lg bg-black'
  },
  {
    name: 'Neon',
    style: 'text-green-500 text-3xl font-extrabold uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg'
  },
  {
    name: 'Glitch',
    style: 'text-pink-500 text-3xl font-extrabold uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg animate-pulse'
  },
  {
    name: 'Fire',
    style: 'text-red-600 text-3xl font-black uppercase tracking-wide drop-shadow-md px-3 py-1 rounded-lg'
  },
  {
    name: 'Frost',
    style: 'text-cyan-300 text-3xl font-semibold italic tracking-wide drop-shadow-md px-3 py-1 rounded-lg'
  },
  {
    name: 'Shadow',
    style: 'text-gray-800 text-3xl font-bold tracking-wide drop-shadow-md px-3 py-1 rounded-lg bg-gray-200'
  },
  {
    name: 'Bubble',
    style: 'text-purple-400 text-3xl font-extrabold italic tracking-wide drop-shadow-md px-3 py-1 rounded-lg'
  },
  {
    name: 'Retro',
    style: 'text-orange-500 text-3xl font-bold uppercase underline decoration-wavy tracking-wide drop-shadow-md px-3 py-1 rounded-lg'
  },
  {
    name: 'Vaporwave',
    style: 'text-pink-400 text-3xl font-bold italic tracking-wide drop-shadow-md px-3 py-1 rounded-lg bg-gradient-to-r from-purple-400 to-pink-500'
  }
];


function Captions({onHandleInputChange}) {
    const [selectedCaptionStyle , setSelectedCaptionStyle] = useState();
  return (
    <div className='mt-5'>
        <h2>
            Caption Style
        </h2>
        <p className='text-sm text-gray-400 mt-2'>Select Caption Style</p>
        <div className='flex flex-wrap gap-4'>
            {options.map((option,index)=>(
                <div key={index} 
                onClick={()=>{setSelectedCaptionStyle(option.name)
                    onHandleInputChange('caption',option);
                }}
                className={`p-2 hover:border bg-slate-900 border-gray-300 cursor-pointer rounded-lg
                ${selectedCaptionStyle==option.name && 'border'}`}>
                    <h2 className={option.style}>{option.name}</h2>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Captions