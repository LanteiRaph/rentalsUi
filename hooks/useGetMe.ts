import { gql, useQuery } from "@apollo/client";

const GET_ME = gql`
  query Me {
    me {
      email
    }
  }
`;

const useGetMe = () => {
  //Make request to the backend server to verify the current user
  //const verified = fetch(`${process.env.API_URL}/auth/verifyMe`)
  //return the retruned user
  console.log('jhey')
  return useQuery(GET_ME, { errorPolicy: "all" });
};

export default useGetMe;
