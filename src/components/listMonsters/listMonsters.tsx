import React, { useContext } from 'react';

// Contexts
import { MonsterContext } from '../appProvider/monsterProvider';

// Components
import {
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Flex,
  Divider,
  CardHeader,
  Icon,
  Box,
  Button,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react';
import { PiXBold, PiCopySimpleBold, PiQuestionBold } from 'react-icons/pi';

// Types
import type { Monster } from '@/gql';
import { HitPoints, ArmorClass, MonsterAttributes } from './components';

export const MonsterCard: React.FC<{ monster: Partial<Monster> }> = ({
  monster,
}) => {
  const { hit_points, armor_class } = monster;

  return (
    <Card variant="outline">
      <CardHeader>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Heading mb={'2'} size="lg" noOfLines={1}>
            {monster.name}
          </Heading>
          <ButtonGroup isAttached variant="solid" size={'sm'}>
            <IconButton
              aria-label="copy monster"
              icon={<Icon as={PiQuestionBold} />}
            />
            <IconButton
              aria-label="copy monster"
              icon={<Icon as={PiCopySimpleBold} />}
            />
            <IconButton
              colorScheme={'red'}
              aria-label="remove monster"
              icon={<Icon as={PiXBold} />}
            />
          </ButtonGroup>
        </Flex>

        <Divider />
      </CardHeader>
      <CardBody paddingTop={'0'}>
        <MonsterAttributes monster={monster} />

        <Flex direction="column" gap={'2'}>
          <HitPoints baseHitPoints={hit_points} />
          <ArmorClass armorClass={armor_class} />
        </Flex>
      </CardBody>
    </Card>
  );
};

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
