"use client"

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useEffect, useState } from "react";
import { AuthContext } from "./_context/AuthContext";
// import { useState } from "react";

// import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
export default function Provider({ children }) {
  const [firebaseUser, setFirebaseUser] = useState();
  const [dbUser, setDbUser] = useState(); // Convex DB user (with credits)
  const CreateUser = useMutation(api.users.CreateNewUser);

  useEffect(() => { // when user refreshes they remain logged in and authenticated
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user || !user.email) return;

      setFirebaseUser(user);

      try {
        const result = await CreateUser({
          name: user.displayName || "No Name",
          email: user.email,
          pictureUrl: user.photoURL || "",
        });
        console.log("Convex user created or returned:", result);
        setDbUser(result); // <-- store this
      } catch (err) {
        console.error("Convex CreateUser error:", err);
      }
    });

    return () => unsubscribe();
  }, [CreateUser]);

  return (
    <AuthContext.Provider value={{ user: dbUser }}>
      <PayPalScriptProvider options ={{clientId:process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}}>      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
      </PayPalScriptProvider>
    </AuthContext.Provider>
  );
}
import { useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./configs/firebaseConfig";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export const useAuthContext = () => {
  return useContext(AuthContext);
};


