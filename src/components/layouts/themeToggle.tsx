import React from 'react';

// Hooks
import { useColorMode } from '@chakra-ui/react';

// Components
import { Switch, Icon, HStack } from '@chakra-ui/react';

// Icons
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing={'1'}>
      <Icon as={FaSun} />
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        colorScheme="primary"
      />
      <Icon as={FaMoon} />
    </HStack>

  );
};
