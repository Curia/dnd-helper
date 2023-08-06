import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

// Components
import {
  Spacer,
  IconProps,
  Icon,
} from '@chakra-ui/react'
import {
  AppShell as SaasAppShell,
  Sidebar,
  SidebarToggleButton,
  SidebarSection,
  NavItem,
} from '@saas-ui/react'
import { PageBody, PageHeader, Page, Toolbar } from '@saas-ui-pro/react'
import { ThemeToggle } from './themeToggle'

// Icons
import { FiHome, FiBox } from 'react-icons/fi'
import { GiMonsterGrasp } from 'react-icons/gi'
import { FaDragon } from 'react-icons/fa'

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

interface AppShellProps { children: React.ReactNode, pageTitle?: string, toolbar?: React.ReactNode }

export const AppShell: React.FC<AppShellProps> = ({ children, pageTitle, toolbar }) => {
  const router = useRouter();

  return (
    <SaasAppShell
      sidebar={
        <Sidebar>
          <SidebarToggleButton />
          <SidebarSection direction="row">

            <Icon as={FaDragon} boxSize={6} />
            <Spacer />
            <ThemeToggle />

          </SidebarSection>
          <SidebarSection aria-label="Main">

            {navigationItems.map(({ label, path, icon }, index) => (
              <NavItem key={index} as={NextLink} href={path} icon={icon} isActive={router.pathname === path}>
                {label}
              </NavItem>
            ))}
          </SidebarSection>
        </Sidebar>
      }
    >
      <Page>
        <PageHeader title={pageTitle} toolbar={toolbar} />
        <PageBody contentWidth="full">
          {children}
        </PageBody>
      </Page>


    </SaasAppShell>
  )
}