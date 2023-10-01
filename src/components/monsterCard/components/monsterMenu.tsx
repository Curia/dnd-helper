import React, { useContext } from 'react';

// Components
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

// Icons
import { FiMoreVertical } from 'react-icons/fi';

// Types
import {
  BattleMonster,
  MonsterActions,
  MonsterContext,
} from '@/components/appProvider/monsterProvider';

export const Monstermenu = ({ monster }: { monster: BattleMonster }) => {
  const { uuid } = monster;
  const { dispatch } = useContext(MonsterContext);

  const handleDelete = () => {
    dispatch({ type: MonsterActions.DELETE_MONSTER, payload: uuid });
  };

  const handleCopy = () => {
    dispatch({ type: MonsterActions.COPY_MONSTER, payload: monster });
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        variant="outline"
        colorScheme="gray"
        aria-label="See monster menu"
        icon={<FiMoreVertical />}
      ></MenuButton>
      <MenuList>
        <MenuItem onClick={handleCopy}>Copy</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};
