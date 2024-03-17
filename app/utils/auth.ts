import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import Github from "next-auth/providers/github";
import Google from "@auth/core/providers/google";
import Email from "@auth/core/providers/email";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    Google({ 
        clientId: process.env.GOOGLE_CLIENT_ID as string, 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string 
    }),
    Email({
        server:{
            host:process.env.EMAIL_SERVER_HOST,
            port:process.env.EMAIL_SERVER_PORT,
            auth:{
                user:process.env.EMAIL_SERVER_USER
                pass:process.env.EMAIL_SERVER_PASSWORD
            },
            from:process.env.EMAI_FROM
        }
    })
  ],
} satisfies NextAuthOptions;
