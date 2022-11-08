import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import authenticatedVar from './authenticated';
import secureLocalStorage from 'react-secure-storage';
import { API_URL } from './urls';

//Compile the http link that is to be used to access the grapgql backend.
const httpLink = new HttpLink({
  uri: `${API_URL}/`,
  credentials: 'same-origin',
});
//Compile the log out error for authenticate user.
const logoutLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      switch (err.message) {
        // Apollo Server sets code to UNAUTHENTICATED
        // when an AuthenticationError is thrown in a resolver
        case 'Not Authorised!': {
          // Modify the operation context with a new token
          authenticatedVar(false);
        }
      }
    }
  }
});
//Handle the auth to provide the token to the backend application.
const authMiddleware = new ApolloLink((operation, forward) => {
console.log('ehy')
  //Exctract the token from the
  const token = secureLocalStorage.getItem('token');
  //console.log(token)
  //Check if the token exsits if so append to the headers.
  if (token) {
    // add the authorization to the headers
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: token,
      },
    }));
  }

  return forward(operation);
});
//
//Handle error for the server.
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      if (message !== 'Not Authorised!') {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      }
    });
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});
//Create the client to access the connections to the graphql server.
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, logoutLink, authMiddleware, httpLink]),
});

export default client;
