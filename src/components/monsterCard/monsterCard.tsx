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
} from '@chakra-ui/react';
import { MonsterAttributes } from '@/components';

// Icons
import { FiMoreVertical, FiBook } from 'react-icons/fi';

// Types
import type { Monster } from '@/gql';

interface MonsterCardProps {
  monster: Partial<Monster>;
}

export const MonsterCard: React.FC<MonsterCardProps> = ({ monster }) => {
  const { name, size, type, alignment } = monster;

  const sizeDesc = `${size} ${type}`;

  return (
    <Card variant={'filled'}>
      <CardHeader>
        <Flex>
          <Box>
            <Heading size="md">{name}</Heading>
            <Text>{`${sizeDesc.toLowerCase()}, ${alignment}`}</Text>
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
        <Divider mb={'2'} />
        <MonsterAttributes monster={monster} />
      </CardBody>
    </Card>
  );
};
