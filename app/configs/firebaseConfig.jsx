'use client';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-video-generator-f7b4d.firebaseapp.com",
  projectId: "ai-video-generator-f7b4d",
  storageBucket: "ai-video-generator-f7b4d.firebasestorage.app",
  messagingSenderId: "1027515035160",
  appId: "1:1027515035160:web:7ae41a6818eb269ce2dd6d",
  measurementId: "G-EDJF8RPWV7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
