import React, { useContext } from 'react';

// Contexts
import { MonsterContext } from '../appProvider/monsterProvider';

// Components
import { SimpleGrid } from '@chakra-ui/react';

// Types
import { MonsterCard } from './monsterCard';

export const ListMonsterCards: React.FC = () => {
  const {
    state: { monsters },
  } = useContext(MonsterContext);

  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      {monsters.map((monster, index) => (
        <MonsterCard monster={monster} key={index} />
      ))}
    </SimpleGrid>
  );
};
