import React from 'react';

// Types
import { BattleMonster } from '@/components/appProvider/monsterProvider';

// Components
import { Tag, TagLabel, Text, Wrap, WrapItem } from '@chakra-ui/react';

// Functions
import { calcStatModifier } from '@/utils';

enum ATTRIBUTE_TYPES {
  STRENGTH = 'strength',
  DEXTERITY = 'dexterity',
  CONSTITUTION = 'constitution',
  INTELLIGENCE = 'intelligence',
  WISDOM = 'wisdom',
  CHARISMA = 'charisma',
}

enum ATTRIBUTE_TYPE_COLORS {
  'red',
  'green',
  'purple',
  'blue',
  'teal',
  'orange',
}

export const MonsterStats = ({ monster }: { monster: BattleMonster }) => {
  return (
    <Wrap>
      {Object.entries(ATTRIBUTE_TYPES).map(([, attributeName], index) => {
        const attributeValue = monster[attributeName];
        const modValue = calcStatModifier(Number(attributeValue));

        return (
          <WrapItem key={index}>
            <Tag variant="subtle" colorScheme={ATTRIBUTE_TYPE_COLORS[index]}>
              <Text mr={'1'} fontWeight={'bold'} textTransform={'uppercase'}>
                {attributeName.slice(0, 3)}
              </Text>
              <TagLabel>{`${attributeValue} (${
                modValue > 0 ? `+ ${modValue}` : ` ${modValue}`
              })`}</TagLabel>
            </Tag>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};
