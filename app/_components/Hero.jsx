import { Button } from '@/components/ui/button'
import React from 'react'
import Authentication from './Authentication'

export default function Hero() {
  return (
    <div className='p-10 flex flex-col items-center justify-center mt-24 md:px-20 lg:px-36 xl:px-38'>
        <h2 className='font-bold text-6xl text-center'>AI VIDEO GENERATOR</h2>
        <p className='mt-4 text-2xl text-center text-gray-500'>AI generates scripts, images, and voiceovers in seconds.
            Create, edit, and publish engaging videos with ease!
        </p>
        <div className='mt-7 gap-8 flex'>
            <Button size='lg' variant="secondary">Explore</Button>
            <Authentication>
                 <Button size='lg'>Get Started</Button>
            </Authentication>
        </div>
    </div>
  )
}
