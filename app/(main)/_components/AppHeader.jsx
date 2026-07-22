"use client"
import { useAuthContext } from '@/app/provider'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Image from 'next/image';
import React from 'react'

export default function AppHeader() {
    const {user}=useAuthContext();
  return (
    <div className='p-3 flex justify-between items-center'>
        <SidebarTrigger/>
        <Image
                     src={user?.photoURL}
                     alt="userImage"
                     width={40}
                     height={40}
                     className="rounded-full"
                   />
    </div>
  )
}
