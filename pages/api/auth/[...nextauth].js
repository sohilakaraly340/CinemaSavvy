import NextAuth from "next-auth/next";
import GithupProvider from "next-auth/providers/github";
export default NextAuth({
  providers: [
    GithupProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
});
