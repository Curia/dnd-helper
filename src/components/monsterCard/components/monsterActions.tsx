import React from 'react';

// Types
import { MonsterAction, Attack, ActionDamage } from '@/gql';

// Icons

import { PiSwordLight } from 'react-icons/pi';
import {
  chakra,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Button,
  IconButton,
  List,
  ListItem,
  Text,
  Heading,
} from '@chakra-ui/react';

interface MonsterActionProps {
  actions: MonsterAction[];
}

const formatAttack = (attack: Attack): string => {
  return `${attack.name}. ${attack.desc}`;
};

const formatDamage = (damage: ActionDamage[]): string => {
  return damage.map((d) => `${d.damage_dice} ${d.damage_type}`).join(', ');
};

const MonsterActionModal = ({
  isOpen,
  onClose,
  actions,
}: {
  isOpen: boolean;
  onClose: () => void;
  actions: MonsterAction[];
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Actions</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List spacing={3}>
            {actions.map((action, index) => (
              <ListItem key={index}>
                <Heading as="h5" size="md">
                  {action.name}
                </Heading>
                <Text>{action.desc}</Text>
              </ListItem>
            ))}
          </List>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="primary" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const MonsterActions: React.FC<MonsterActionProps> = ({ actions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MonsterActionModal isOpen={isOpen} onClose={onClose} actions={actions} />
      <IconButton
        aria-label="View monster actions"
        variant="outline"
        icon={<PiSwordLight />}
        onClick={onOpen}
      />
    </>
  );
};

export default MonsterActions;
