import React, { useContext } from 'react';

// Contexts
import { MonsterContext } from '../appProvider/monsterProvider';

// Components
import { Card, CardBody, Heading, SimpleGrid, Text } from '@chakra-ui/react';

// Types
import type { Monster } from '@/gql';

export const MonsterCard: React.FC<{ monster: Partial<Monster> }> = ({
  monster,
}) => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <CardBody>
        <Heading size="md">{monster.name}</Heading>
        <Text>{monster.hit_points}</Text>
      </CardBody>
    </Card>
  );
};

export const ListMonsters: React.FC<undefined> = () => {
  const {
    state: { monsters },
  } = useContext(MonsterContext);

  return (

    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>


      {monsters.map((monster, index) => (
        <MonsterCard monster={monster} key={index} />
      ))}
    </SimpleGrid>
  );
};
