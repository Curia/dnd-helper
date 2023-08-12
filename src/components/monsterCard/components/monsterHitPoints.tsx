import React, { useRef, useState } from 'react';

// Components
import {
  chakra,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  InputLeftElement,
  IconButton,
  Icon,
  Center,
  Flex,
  Spacer,
} from '@chakra-ui/react';

// Icons
import { FiMinus, FiPlus, FiHeart } from 'react-icons/fi';

export const MonsterHitPoints = ({
  hitPoints,
  hitDice,
}: {
  hitPoints: number;
  hitDice: string;
}) => {
  const [currentHitPoints, setCurrentHitPoints] = useState(hitPoints);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleHealthChange = (increment: boolean) => {
    if (inputRef.current && inputRef.current.value) {
      const currentValue = parseInt(inputRef.current.value);
      const newValue = increment
        ? currentHitPoints + currentValue
        : currentHitPoints - currentValue;
      setCurrentHitPoints(newValue);
    }
  };

  return (
    <>
      <Flex>
        <Center>
          <Icon size="xl" boxSize="4" marginRight="2" as={FiHeart} />
          <Text fontSize="xl">
            {currentHitPoints}
            <chakra.span marginLeft="2" fontSize="sm">
              ({hitDice})
            </chakra.span>
          </Text>
        </Center>
        <Spacer />
        <Center>
          <InputGroup maxW="100px">
            <InputLeftElement>
              <IconButton
                aria-label="Remove health"
                icon={<FiMinus />}
                onClick={() => {
                  handleHealthChange(false);
                }}
                colorScheme="red"
                variant="ghost"
              />
            </InputLeftElement>
            <Input ref={inputRef} type="number" />
            <InputRightElement>
              <IconButton
                aria-label="Add health"
                icon={<FiPlus />}
                onClick={() => {
                  handleHealthChange(true);
                }}
                colorScheme="green"
                variant="ghost"
              />
            </InputRightElement>
          </InputGroup>
        </Center>
      </Flex>
    </>
  );
};
