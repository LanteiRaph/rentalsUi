import { useSession } from "next-auth/react";

export const useAuth = () =>  {
    //Exctract next js server user
    const { data: session , status} = useSession();
    //Get the local user: backend user. Next js user has to be for the opration to be complite
    //Check next js server user. 
    
}