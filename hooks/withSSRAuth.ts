import { GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export function withSSRAuth<P extends {[key:string]: any}>(fn: GetServerSideProps<P>): GetServerSideProps {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
      const session = await unstable_getServerSession(ctx.req, ctx.res , authOptions);
      
      if(!session) {
        //return the user prop as session
        return {
            redirect: {
                destination:'/api/auth/signin',
                permanent: false
            }
        }
      }
      return await fn(ctx)      
    };
  }