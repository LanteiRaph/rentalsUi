// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';

type Data = {
  user : Session
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await  unstable_getServerSession(req, res, authOptions);
  if (session) {
    // Signed in
   res.status(200).json({user: session})
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
}
