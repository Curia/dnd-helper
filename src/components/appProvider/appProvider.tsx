// Apollo
import { ApolloProvider } from '@apollo/client';
import apolloClient from "@/lib/apolloClient";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
};
