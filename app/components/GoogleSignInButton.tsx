"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import GoogleIcon from '../../public/google.svg'
import { signIn } from "next-auth/react"

export default function GoogleSignInButton() {
  return (
    <div>
        <Button variant="outline" size="icon" onClick={() => signIn('google')}>
          <Image 
            src={GoogleIcon}
            alt="Google Icon"
            priority
            className="w-6 h-6"
          />
        </Button>
    </div>
  )
}
