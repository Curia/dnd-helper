import React from 'react';
import NextLink from 'next/link';

// Hooks
import { useRouter } from 'next/router';
import {
  IconButton,
  VStack,
  chakra,
  createStylesContext,
  useColorMode,
  useDisclosure,
  useMultiStyleConfig,
} from '@chakra-ui/react';

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
import { FiHome, FiBox, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
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

const [StylesProvider, useStyles] = createStylesContext('SuiPage');

export const PageTitle = ({ title }: { title: string }) => {
  const styles = useStyles();

  return (
    <>
      <chakra.div __css={styles.title} paddingInlineStart={['14', '4']} as="h2">
        {title}
      </chakra.div>
    </>
  );
};

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
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: true,
  });

  const styles = useMultiStyleConfig('SuiPage');

  return (
    <StylesProvider value={styles}>
      <SaasAppShell
        sidebar={
          <Sidebar
            toggleBreakpoint={'md'}
            variant={isOpen ? 'default' : 'compact'}
            transition="width"
            transitionDuration="normal"
            width={isOpen ? '280px' : '14'}
            minWidth="auto"
          >
            <SidebarToggleButton />
            <SidebarSection direction={isOpen ? 'row' : 'column'}>
              <Circle bg={colorMode === 'dark' ? 'white' : 'black'}>
                <Icon
                  as={LiaDragonSolid}
                  boxSize={8}
                  p={'1'}
                  color={colorMode === 'dark' ? 'black' : 'white'}
                />
              </Circle>
            </SidebarSection>
            <SidebarSection flex="1" overflowY="auto" overflowX="hidden">
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
            <SidebarSection direction={isOpen ? 'row' : 'column'}>
              <Spacer />
              <VStack>
                <ThemeToggle />
                <IconButton
                  onClick={onToggle}
                  variant="ghost"
                  size="sm"
                  icon={isOpen ? <FiChevronsLeft /> : <FiChevronsRight />}
                  aria-label="Toggle Sidebar"
                />
              </VStack>
            </SidebarSection>
          </Sidebar>
        }
      >
        <Page>
          <PageHeader
            title={<PageTitle title={pageTitle} />}
            toolbar={toolbar}
          />
          <PageBody contentWidth="full">{children}</PageBody>
        </Page>
      </SaasAppShell>
    </StylesProvider>
  );
};
