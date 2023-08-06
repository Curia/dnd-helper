import React from 'react';
import NextLink from 'next/link';

// Hooks
import { useRouter } from 'next/router';
import { useColorMode } from '@chakra-ui/react';

// Components
import { Spacer, IconProps, Icon, Circle } from '@chakra-ui/react';
import {
  AppShell as SaasAppShell,
  Sidebar,
  SidebarToggleButton,
  SidebarSection,
  NavItem,
} from '@saas-ui/react';
import { PageBody, PageHeader, Page } from '@saas-ui-pro/react';
import { ThemeToggle } from './themeToggle';

// Icons
import { FiHome, FiBox } from 'react-icons/fi';
import { GiMonsterGrasp } from 'react-icons/gi';
import { LiaDragonSolid } from 'react-icons/lia';

interface NavigationItem {
  label: string;
  path: string;
  icon: IconProps;
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    path: '/',
    icon: <FiHome />,
  },
  {
    label: 'Monsters',
    path: '/monsters',
    icon: <GiMonsterGrasp />,
  },
  {
    label: 'Items',
    path: '/items',
    icon: <FiBox />,
  },
];

interface AppShellProps {
  children: React.ReactNode;
  pageTitle?: string;
  toolbar?: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({
  children,
  pageTitle,
  toolbar,
}) => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  return (
    <SaasAppShell
      sidebar={
        <Sidebar>
          <SidebarToggleButton />
          <SidebarSection direction="row">
            <Circle bg={colorMode === 'dark' ? 'white' : 'black'}>
              <Icon
                as={LiaDragonSolid}
                boxSize={10}
                p={'1'}
                color={colorMode === 'dark' ? 'black' : 'white'}
              />
            </Circle>
            <Spacer />
            <ThemeToggle />
          </SidebarSection>
          <SidebarSection aria-label="Main">
            {navigationItems.map(({ label, path, icon }, index) => (
              <NavItem
                key={index}
                as={NextLink}
                href={path}
                icon={icon}
                isActive={router.pathname === path}
              >
                {label}
              </NavItem>
            ))}
          </SidebarSection>
        </Sidebar>
      }
    >
      <Page>
        <PageHeader title={pageTitle} toolbar={toolbar} />
        <PageBody contentWidth="full">{children}</PageBody>
      </Page>
    </SaasAppShell>
  );
};
