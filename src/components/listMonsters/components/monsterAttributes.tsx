import React from 'react';

// Types
import type { Monster } from '@/gql';

// Components
import { HStack, Tag } from '@chakra-ui/react';

// Functions
import { calculateAbilityModifier } from '@/utils';

enum ATTRIBUTE_TYPES {
  STRENGTH = 'strength',
  DEXTERITY = 'dexterity',
  CONSTITUTION = 'constitution',
  INTELLIGENCE = 'intelligence',
  WISDOM = 'wisdom',
  CHARISMA = 'charisma',
}

export const MonsterAttributes = ({
  monster,
}: {
  monster: Partial<Monster>;
}) => {
  return (
    <HStack spacing={4}>
      {Object.entries(ATTRIBUTE_TYPES).map(([, attributeName], index) => {
        const attributeValue = monster[attributeName];

        return (
          <Tag key={index} variant="solid" colorScheme="teal">
            {attributeName.slice(0, 3).toUpperCase()}{' '}
            {`${attributeValue} (+${calculateAbilityModifier(
              Number(attributeValue),
            )})`}
          </Tag>
        );
      })}
    </HStack>
  );
};
