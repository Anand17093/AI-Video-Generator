"use client"

import React from 'react'
import Link from 'next/link'
import Authentication from './Authentication'
import { useAuthContext } from '../provider'
import { Button } from '@/components/ui/button'

export default function Header() {
  const { user } = useAuthContext(); //firebase user

  // Check both Convex database field (pictureUrl) and Firebase fallback (photoURL)
  const profileImage = user?.pictureUrl || user?.photoURL;
  const userName = user?.name || user?.displayName || 'User';

  return (
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="logo" className="w-10 h-10" />
        <h2 className="text-2xl font-bold">Video Generator</h2>
      </div>

      <div>
        {!user ? (
          <Authentication>
            <Button>Get Started</Button>
          </Authentication>
        ) : (
          <div className="flex items-center gap-3">
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>

            {profileImage ? (
              <img
                src={profileImage}
                alt="userImage"
                className="w-10 h-10 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
            ) : null}

            {/* Default Google-style account icon fallback */}
            <div
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground items-center justify-center font-bold text-lg"
              style={{ display: profileImage ? 'none' : 'flex' }}
            >
              {userName[0].toUpperCase()}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}