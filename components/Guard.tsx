import { useSession } from 'next-auth/react';
import { ReactNode, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

interface GuardProps {
  children: ReactNode;
  excludedRoutes?: string[];
}

const Guard = ({ children }: GuardProps) => {
  //Extract the next js user
  const { data: token, status } = useSession();
  //Once a user has been looged in save the token for backend access.
  useEffect(() => {
    //Store the local user token in the lo
    if (status === 'authenticated') {
      //Store the user data
      secureLocalStorage.setItem('token', token.token as string);
    }
  }, [token, status]);
  return <>{children}</>;
};

export default Guard;
