import NextAuth from "next-auth/next";
import EmailProvider from "next-auth/providers/email";
import {MongoDBAdapter} from '@next-auth/mongodb-adapter';
import MongoClientPromise from '../../../lib/mongo';


const THIRTY_DAYS = 30 * 24 * 60 * 60;
const THIRTY_MINUTES = 30 * 60;

export default NextAuth({
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
    maxAge: THIRTY_DAYS,
    updateAge: THIRTY_MINUTES,
  },
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from:process.env.EMAIL_FROM
      
    }),
  ],
  adapter:MongoDBAdapter(MongoClientPromise)
  
});
