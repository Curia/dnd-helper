import React from 'react';

// Components
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Flex,
  Box,
  Spacer,
  Divider,
  Stack,
  StackDivider,
} from '@chakra-ui/react';
import { MonsterHitPoints, MonsterStats, Monstermenu } from '@/components';

// Types
import { BattleMonster } from '../appProvider/monsterProvider';
import { MonsterAttributes } from './components/monsterAttributes';
import MonsterActions from './components/monsterActions';

interface MonsterCardProps {
  monster: BattleMonster;
}

export const MonsterCard: React.FC<MonsterCardProps> = ({ monster }) => {
  const { name, hit_points, hit_dice, actions } = monster;

  return (
    <Card variant={'filled'}>
      <CardHeader pb={'0'}>
        <Flex>
          <Box>
            <Heading as="h2" size="lg" mb={'2'}>
              {name}
            </Heading>
          </Box>
        </Flex>
        <MonsterHitPoints hitPoints={hit_points} hitDice={hit_dice} />
        <Divider mt={'4'} />
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />}>
          <Box>
            <MonsterAttributes monster={monster} />
          </Box>
          <Box>
            <MonsterStats monster={monster} />
          </Box>
          <Flex>
            <MonsterActions actions={actions} />
            <Spacer />
            <Monstermenu monster={monster} />
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
