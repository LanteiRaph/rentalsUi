import { useReactiveVar } from "@apollo/client";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import client from "../constants/apollo-client";
import authenticatedVar from "../constants/authenticated";
import {useGetMe} from "../hooks/useGetMe";
import {useSession} from 'next-auth/react'
import  secureLocalStorage  from  "react-secure-storage";
import { useApp } from "../store/AppSlice";

interface GuardProps {
  children: ReactNode;
  excludedRoutes?: string[];
}

const Guard = ({children}: GuardProps) => {
  //Extract the next js user
  const {data: token , status} = useSession()
  //Once a user has been looged in save the token for backend access.
  useEffect(() => {
    //Store the local user token in the lo
    if(status === 'authenticated'){
      console.log(token.token)
      //Store the user data
      secureLocalStorage.setItem('token' , (token.token) as string)
    }
  },[token, status])
  return (
    <>
      {children}
    </>
  );
};



export default Guard;
