import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import authenticatedVar from '../../../constants/authenticated';
import { getServerSideToken } from '../../../lib/helper';
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }
        //
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
  theme: {
    colorScheme: 'auto',
  },
  callbacks: {
    async jwt({ token, user }) {
      //Update the token to the user token:server side token
      if (user) {
        //Append the returned token to the token object
        token.accessToken = user.accessToken;
      }
      //Return the token
      return token;
    },
    async signIn({ account, user }) {
      //Only accept google providers.
      if (account.provider === 'google') {
        const googleUser = {
          name: user.name,
          email: user.email,
          image: user.image,
        };
        //Append the backend token to the client.
        user.accessToken = await getServerSideToken(googleUser);
        return true;
      }
      return false;
    },
    async session({ session,token}) {
      //Succefull login update the state manager
      session.token = token.accessToken
      //Update the authenticated global var
      authenticatedVar(true)
      //Return the session for accescing on pages.
      return session;
    },
  },
  pages: {
    newUser:'/new/user',
    signIn: '/auth/login'
  } 
};

export default NextAuth(authOptions);
