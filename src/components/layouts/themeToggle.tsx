import React from 'react';

// Hooks
import { useColorMode } from '@chakra-ui/react';

// Components
import { Switch, Icon, HStack } from '@chakra-ui/react';

// Icons
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing={'1'}>
      <Icon as={FiSun} />
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        colorScheme="primary"
      />
      <Icon as={FiMoon} />
    </HStack>
  );
};
