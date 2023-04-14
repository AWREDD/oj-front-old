"use client";

import React from 'react'
import { useSession, signIn, signOut, SessionProvider} from "next-auth/react"



export default function User(session) {
  if(session){
    return (
      <div>
        <p>{session.user.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    ) 
  }
  return (
    <div>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}
