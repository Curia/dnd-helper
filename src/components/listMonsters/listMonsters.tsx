import React, { useContext } from 'react';

// Contexts
import { MonsterContext } from '../appProvider/monsterProvider';

// Components
import { SimpleGrid } from '@chakra-ui/react';

// Types
import { MonsterCard } from '@/components';

export const ListMonsters: React.FC<undefined> = () => {
  const {
    state: { monsters },
  } = useContext(MonsterContext);

  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
    >
      {monsters.map((monster, index) => (
        <MonsterCard monster={monster} key={index} />
      ))}
    </SimpleGrid>
  );
};
