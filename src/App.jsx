import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "./config/apolloClient";
import AppRouter from "./routing/AppRouter";

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AppRouter />
    </ApolloProvider>
  );
}
