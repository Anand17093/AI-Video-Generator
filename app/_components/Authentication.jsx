"use client";

import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";

// ✅ Create the provider once
const provider = new GoogleAuthProvider();

export default function Authentication({ children }) {
  const onSignInClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      console.log("User:", user);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return <div onClick={onSignInClick}>{children}</div>;
}
