import secureLocalStorage from "react-secure-storage";

export const getServerSideToken = async (user: any): Promise<string> => {
  //Mke request to the backend server for a token for the current user.
  const userToken = await fetch('http://localhost:8080/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  //Extract the data from the returned object
  const userToken_ = await userToken.json();
  //return the token string
  return userToken_.accessToken;
};
export interface  graphqlQuery  {
    operationName: string,
    query: string,
    variables?: {},
}
//Fetch from a grapql server with http
export const fetchGraphqlServer = async (Query: graphqlQuery) => {
  //Set the end point to fetch from
  const endpoint = 'http://localhost:8080/';
  //Set the headers to fetch from.
  const headers = {
    'content-type': 'application/json',
    Authorization: (secureLocalStorage.getItem('token')) as string
  };
  //set the options forthe request.
  const options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(Query),
  };
  //Make the request async
  const response = await fetch(endpoint, options);
  if (response.ok) {
    //await the data
    const data = await response.json();
    return data;
  }
  console.log(await response.json());
};
