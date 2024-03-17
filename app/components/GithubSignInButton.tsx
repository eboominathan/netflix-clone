"use client"

import { Button } from "@/components/ui/button"
import { GithubIcon } from "lucide-react"
import { signIn } from "next-auth/react"

 

export default function GithubSigninButton() {
  return (
    <div>
          <Button variant="outline" size="icon" onClick={() => signIn('github') }>
          <GithubIcon />
        </Button>

    </div>
  )
}
