import React from 'react';

// Types
import type { Monster } from '@/gql';

// Components
import { Tag, TagLabel, Text, Wrap, WrapItem } from '@chakra-ui/react';

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
    <Wrap>
      {Object.entries(ATTRIBUTE_TYPES).map(([, attributeName], index) => {
        const attributeValue = monster[attributeName];

        return (
          <WrapItem key={index}>
            <Tag>
              <Text mr={'1'} fontWeight={'bold'} textTransform={'uppercase'}>
                {attributeName.slice(0, 3)}
              </Text>
              <TagLabel>{`${attributeValue} (+${calculateAbilityModifier(
                Number(attributeValue),
              )})`}</TagLabel>
            </Tag>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};
