import { useReactiveVar } from "@apollo/client";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import client from "../constants/apollo-client";
import authenticatedVar from "../constants/authenticated";
import useGetMe from "../hooks/useGetMe";
import {useSession} from 'next-auth/react'
import  secureLocalStorage  from  "react-secure-storage";

interface GuardProps {
  children: ReactNode;
  excludedRoutes?: string[];
}

const Guard = ({ children, excludedRoutes }: GuardProps) => {
  //Extract the next js user
  const {data: token , status} = useSession()
  const { data: user, refetch } = useGetMe();
  const authenticated = useReactiveVar(authenticatedVar);
  const router = useRouter();
  console.log(token)
  console.log(user)
  useEffect(() => {
    if (!excludedRoutes?.includes(router.pathname)) {
      refetch();
    }
  }, [router.pathname, refetch, excludedRoutes]);

  useEffect(() => {
    if (!authenticated && !excludedRoutes?.includes(router.pathname)) {
      router.push("/api/auth/signin");
      client.resetStore();
    }
  }, [authenticated, router, excludedRoutes, user]);
  //
  useEffect(() => {
    //Store the local user token in the lo
    if(status === 'authenticated'){
      //Store the user data
      secureLocalStorage.setItem('token' , (token.token) as string)
    }
  },[token, status])
  return (
    <>
      {excludedRoutes?.includes(router.pathname) ? (
        children
      ) : (
        <>{user && children}</>
      )}
    </>
  );
};



export default Guard;
