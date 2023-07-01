import React from 'react';
// Apollo
import { ApolloProvider } from '@apollo/client';
import apolloClient from "@/lib/apolloClient";
// saas ui
import Link, { LinkProps } from 'next/link'
import { SaasProvider } from '@saas-ui/react'

const NextLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link ref={ref} {...props} />
)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <SaasProvider linkComponent={NextLink}>
        {children}
      </SaasProvider>
    </ApolloProvider>
  );
};
