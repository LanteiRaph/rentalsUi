import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import GithubProvider from 'next-auth/providers/github';
import TwitterProvider from 'next-auth/providers/twitter';
import Auth0Provider from 'next-auth/providers/auth0';
import { getServerSideToken } from '../../../lib/helper';
import { userAgent } from 'next/server';
// import AppleProvider from "next-auth/providers/apple"
// import EmailProvider from "next-auth/providers/email"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    /* EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       }),
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains
    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: {
        appleId: process.env.APPLE_ID,
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID,
      },
    }),
    */
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  theme: {
    colorScheme: 'auto',
  },
  callbacks: {
    async jwt({ token ,user}) {
      //Update the token to the user token:server side token
      if(user){
        token.accessToken = user.accessToken
      }
      token.userRole = 'admin';
      //Return the token
      return token;
    },
    async signIn({ account, user}) {
      //Only accept google providers.
      if (account.provider === 'google') {
        const googleUser = {
          name:user.name,
          email:user.email,
          image: user.image
        };
        //Append the backend tokenn to the client.
        user.accessToken = await getServerSideToken(
          googleUser
        );
        return true;
      }
      return false;
    },
    async session({session}){
        return session
    },
  },
};

export default NextAuth(authOptions);
