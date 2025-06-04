/* eslint-disable @typescript-eslint/no-unused-vars */
// src/types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string | undefined;
      name?: string | null ;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string;
  }
}
