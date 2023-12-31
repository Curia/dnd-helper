import React from 'react';
// Apollo
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@/lib/apolloClient';
// saas ui
import Link, { LinkProps } from 'next/link';
import { SaasProvider } from '@saas-ui/react';

// Custom providers
import { ConstantsProvider } from './constantsProvider';
import { MonsterProvider } from './monsterProvider';
import { theme } from '@/lib';

const NextLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link ref={ref} {...props} />,
);

NextLink.displayName = 'NextLink';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <SaasProvider linkComponent={NextLink} theme={theme}>
        <ConstantsProvider>
          <MonsterProvider>{children}</MonsterProvider>
        </ConstantsProvider>
      </SaasProvider>
    </ApolloProvider>
  );
};
