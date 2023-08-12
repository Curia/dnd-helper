import React from 'react';

// Components
import { Stack, Text, Heading, chakra } from '@chakra-ui/react';

// Types
import { BattleMonster } from '@/components/appProvider/monsterProvider';
import { MonsterArmorClass, MonsterSpeed } from '@/gql';

// Functions
import { calcArmorClass } from '@/utils';

const ArmourClass = ({ armorClass }: { armorClass: MonsterArmorClass[] }) => {
  return (
    <>
      <Heading size="md" textTransform="uppercase">
        Armor Class
      </Heading>
      <Text fontSize="md">{calcArmorClass(armorClass)}</Text>
    </>
  );
};

const SpeedClass = ({ monsterSpeed }: { monsterSpeed: MonsterSpeed }) => {
  const mappedSpeeds = Object.entries(monsterSpeed)
    .slice(1)
    .filter(([, speed]) => speed);
  return (
    <>
      <Heading size="md" textTransform="uppercase">
        Speed
      </Heading>
      <Text fontSize="md">
        {mappedSpeeds.map(([type, speed], index) => (
          <chakra.span key={index}>{`${type}: ${speed}${
            index + 1 < mappedSpeeds.length ? ', ' : ''
          }`}</chakra.span>
        ))}
      </Text>
    </>
  );
};

export const MonsterAttributes = ({ monster }: { monster: BattleMonster }) => {
  const { armor_class, speed } = monster;

  return (
    <Stack>
      <ArmourClass armorClass={armor_class} />
      <SpeedClass monsterSpeed={speed} />
    </Stack>
  );
};
