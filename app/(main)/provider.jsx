"use client"
import { SidebarProvider } from '@/components/ui/sidebar'
import React, { useEffect } from 'react'
import AppSidebar from './_components/AppSidebar'
import AppHeader from './_components/AppHeader'
import { useAuthContext } from '../provider'
import { useRouter } from 'next/navigation'

function DashboardProvider({children}) {
  const {user}=useAuthContext();
  const router=useRouter();
  useEffect(()=>{
    user && CheckUserAuthenticated();
  },[user]);

const CheckUserAuthenticated=()=>{
  if(!user){
    router.replace('/');
  }
}
  return (
    <SidebarProvider>
      <AppSidebar/>
    <div className='w-full'>
      <AppHeader/>
      <div className='p-10'>
        {children}
        </div>
        </div>
    </SidebarProvider>
  )
}

export default DashboardProvider

// "use client";
// import { SidebarProvider } from "@/components/ui/sidebar";
// import React, { useEffect } from "react";
// import AppSidebar from "./_components/AppSidebar";
// import AppHeader from "./_components/AppHeader";
// import { useAuthContext } from "../provider";
// import { useRouter } from "next/navigation";

// function DashboardProvider({ children }) {
//   const { user } = useAuthContext();
//   const router = useRouter();

//   useEffect(() => {
//     if (user === null || user === undefined) return;
//     if (!user) router.replace("/");
//   }, [user]);

//   // Show loading until convexUser is fetched
//   if (user === undefined) {
//     return <div className="text-white p-6">Loading user...</div>;
//   }

//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <div className="w-full">
//         <AppHeader />
//         {children}
//       </div>
//     </SidebarProvider>
//   );
// }

// export default DashboardProvider;

// "use client";
// import { SidebarProvider } from "@/components/ui/sidebar";
// import React, { useEffect } from "react";
// import AppSidebar from "./_components/AppSidebar";
// import AppHeader from "./_components/AppHeader";
// import { useAuthContext } from "../provider";
// import { useRouter } from "next/navigation";

// function DashboardProvider({ children }) {
//   const { user } = useAuthContext();
//   const router = useRouter();

//   useEffect(() => {
//     if (user === null) {
//       // Convex responded: no such user
//       router.replace("/");
//     }
//     // Don't run anything if user is undefined (still loading)
//   }, [user]);

//   // Show loading screen while Convex user is being fetched
//   if (user === undefined) {
//     return <div className="text-white p-6">Loading user...</div>;
//   }

//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <div className="w-full">
//         <AppHeader />
//         {children}
//       </div>
//     </SidebarProvider>
//   );
// }

// export default DashboardProvider;
