import React from 'react';

// Hooks
import { IconButton, useColorMode } from '@chakra-ui/react';

// Icons
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant="ghost"
      colorScheme="gray"
      aria-label="Color mode"
      icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
      onClick={toggleColorMode}
    />
  );
};
