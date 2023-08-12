import React from 'react';

// Components
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Flex,
  Box,
  IconButton,
  Spacer,
  Divider,
  Stack,
  StackDivider,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { MonsterHitPoints, MonsterStats } from '@/components';

// Icons
import { FiMoreVertical, FiBook } from 'react-icons/fi';

// Types
import { BattleMonster } from '../appProvider/monsterProvider';
import { MonsterAttributes } from './components/monsterAttributes';

interface MonsterCardProps {
  monster: BattleMonster;
}

export const MonsterCard: React.FC<MonsterCardProps> = ({ monster }) => {
  const { name, hit_points, hit_dice } = monster;

  return (
    <Card variant={'filled'}>
      <CardHeader pb={'0'}>
        <Flex>
          <Box>
            <Heading size="lg" mb={'2'}>
              {name}
            </Heading>
          </Box>
          <Spacer />
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="More monster info"
            icon={<FiBook />}
          />
          <Menu>
            <MenuButton
              as={IconButton}
              variant="ghost"
              colorScheme="gray"
              aria-label="See monster menu"
              icon={<FiMoreVertical />}
            ></MenuButton>
            <MenuList>
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
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
        </Stack>
      </CardBody>
    </Card>
  );
};
