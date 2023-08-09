import React from 'react';

// Components
import { Stack, Text, Heading } from '@chakra-ui/react';

// Types
import { BattleMonster } from '@/components/appProvider/monsterProvider';
import { MonsterArmorClass, MonsterSpeed } from '@/gql';

// Functions
import { calcArmorClass } from '@/utils';

const ArmourClass = ({ armorClass }: { armorClass: MonsterArmorClass[] }) => {
  return (
    <>
      <Heading size="sm" textTransform="uppercase">
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
      <Heading size="sm" textTransform="uppercase">
        Speed
      </Heading>
      <Text fontSize="md">
        {mappedSpeeds.map(([type, speed], index) => (
          <>{`${type}: ${speed}${
            index + 1 < mappedSpeeds.length ? ', ' : ''
          }`}</>
        ))}
      </Text>
    </>
  );
};

export const MonsterAttributes = ({ monster }: { monster: BattleMonster }) => {
  const { hit_points, armor_class, speed } = monster;

  return (
    <Stack>
      <ArmourClass armorClass={armor_class} />
      <Heading size="sm" textTransform="uppercase">
        Hit Points
      </Heading>
      <Text fontSize="md">{hit_points}</Text>
      <SpeedClass monsterSpeed={speed} />
    </Stack>
  );
};
