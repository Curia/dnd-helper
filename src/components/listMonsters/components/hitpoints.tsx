import React, { useRef, useState } from 'react';

// Components
import { Button, Icon, Input, InputGroup, InputRightAddon, Flex, Text } from '@chakra-ui/react';
import { PiHeartDuotone, PiPlusBold, PiMinusBold } from 'react-icons/pi'

export const HitPoints: React.FC<{ baseHitPoints: number | undefined }> = ({
  baseHitPoints,
}) => {
  const [hitPoints, setHitPoints] = useState(baseHitPoints || 0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (type: boolean) => {
    const value = inputRef.current?.value;
    if (type && value) {
      setHitPoints(hitPoints + Math.abs(Number(value)));
    } else {
      setHitPoints(hitPoints + -Math.abs(Number(value)));
    }
  }

  return (
    <Flex alignItems={'center'} gap={'4'}>
      <Text display={'flex'} alignItems={'center'} fontSize='2xl'><Icon as={PiHeartDuotone} mr={'2'} /> {hitPoints}</Text>
      <InputGroup size='sm' maxW='50%' mt='1'>
        <Input ref={inputRef} />
        <InputRightAddon padding='0'>
          <Button colorScheme='green' onClick={() => { handleClick(true) }} borderRadius='0' variant='outline'>
            <Icon as={PiPlusBold} />
          </Button>
          <Button colorScheme='red' onClick={() => { handleClick(false) }} borderLeftRadius='0' variant='outline'>
            <Icon as={PiMinusBold} />
          </Button>
        </InputRightAddon>
      </InputGroup>
    </Flex>
  );
};