import React from 'react';

// Components
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
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
} from '@chakra-ui/react';
import { MonsterStats } from '@/components';

// Icons
import { FiMoreVertical, FiBook } from 'react-icons/fi';

// Types
import { BattleMonster } from '../appProvider/monsterProvider';
import { MonsterAttributes } from './components/monsterAttributes';

interface MonsterCardProps {
  monster: BattleMonster;
}

export const MonsterCard: React.FC<MonsterCardProps> = ({ monster }) => {
  const { name, size, type, alignment } = monster;

  const sizeDesc = `${size} ${type}`;

  return (
    <Card variant={'filled'}>
      <CardHeader>
        <Flex>
          <Box>
            <Heading size="md" mb={'2'}>
              {name}
            </Heading>
            <Wrap>
              <WrapItem>
                <Tag variant="subtle" size={'sm'}>
                  <TagLabel fontWeight={'bold'}>
                    {sizeDesc.toLowerCase()}
                  </TagLabel>
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag variant="subtle" size={'sm'}>
                  <TagLabel fontWeight={'bold'}>{alignment}</TagLabel>
                </Tag>
              </WrapItem>
            </Wrap>
          </Box>
          <Spacer />
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="More monster info"
            icon={<FiBook />}
          />
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See monster menu"
            icon={<FiMoreVertical />}
          />
        </Flex>
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
