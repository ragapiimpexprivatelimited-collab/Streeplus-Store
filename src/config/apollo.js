import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const graphqlUri = import.meta.env.VITE_GRAPHQL_URI || 'https://countries.tld/graphql'

const httpLink = new HttpLink({
  uri: graphqlUri,
})

const authLink = new ApolloLink((operation, forward) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      ...(token ? { authorization: `Bearer ${token}` } : {}),
      'x-app-name': 'raga-impex-web',
    },
  }))

  return forward(operation)
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error('[GraphQL error]', { message, locations, path })
    })
  }

  if (networkError) {
    console.error('[Network error]', networkError)
  }
})

export const apolloClient = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
})

export const createApolloClient = (uri = graphqlUri) =>
  new ApolloClient({
    link: from([
      errorLink,
      authLink,
      new HttpLink({ uri }),
    ]),
    cache: new InMemoryCache(),
  })
