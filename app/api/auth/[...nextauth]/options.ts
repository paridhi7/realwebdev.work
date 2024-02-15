import GitHubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/signout",
  },
};
