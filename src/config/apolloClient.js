import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'

const GRAPHQL_URI = import.meta.env.VITE_GRAPHQL_URI ?? 'https://countries.tld/graphql'

const httpLink = new HttpLink({ uri: GRAPHQL_URI })

const authLink = setContext((_, { headers = {} }) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null
  return {
    headers: {
      ...headers,
      ...(token ? { authorization: `Bearer ${token}` } : {}),
      'x-app-name': 'raga-impex-web',
    },
  }
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

export const createApolloClient = (uri = GRAPHQL_URI) => {
  const link = from([errorLink, authLink, new HttpLink({ uri })])
  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })
}

export const apolloClient = createApolloClient()
