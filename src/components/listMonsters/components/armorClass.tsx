import React from 'react';

// Components
import { Icon, Flex, Text } from '@chakra-ui/react';
import { PiShieldDuotone } from 'react-icons/pi'

// Types
import type { MonsterArmorClass, Maybe } from '@/gql';

export const ArmorClass: React.FC<{ armorClass: Maybe<Maybe<MonsterArmorClass>[]> | undefined }> = ({
  armorClass,
}) => {
  console.log('armorClass', armorClass)
  const baseArmor = armorClass[0];
  const additionArmor = <> ({armorClass.slice(1).map((additionalClass, index) => <Text key={index}>{`${additionalClass?.value} with ${additionalClass?.spell?.name}`}</Text>)})</>

  return (
    <Flex alignItems={'center'} gap={'4'}>
      <Text display={'flex'} alignItems={'center'} fontSize='2xl'><Icon as={PiShieldDuotone} mr={'2'} /> {baseArmor?.value} {additionArmor}</Text>
    </Flex>
  );
};