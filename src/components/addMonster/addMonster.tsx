import React, { useContext } from 'react';

import { useDisclosure } from '@chakra-ui/react';
import {
  CommandBar,
  CommandBarDialog,
  CommandBarContent,
  CommandBarInput,
  CommandBarList,
  CommandBarItem,
  CommandBarLoading,
  CommandBarEmpty,
} from '@saas-ui/command-bar';
import { useGetConstants } from '../appProvider/constantsProvider';
import { useGetMonsterLazyQuery } from '@/gql';
import { MonsterActions, MonsterContext } from '../appProvider/monsterProvider';
import { Toolbar, ToolbarButton } from '@saas-ui-pro/react';

export const AddMonster: React.FC = () => {
  const { dispatch } = useContext(MonsterContext);
  const { isOpen, onClose, onToggle } = useDisclosure();
  const { monsters } = useGetConstants();

  const [getMonster, { loading }] = useGetMonsterLazyQuery();

  const addMonster = (monsterIndex: string) => {
    getMonster({ variables: { monsterIndex: monsterIndex } }).then(
      (response) => {
        if (response.data?.monster) {
          dispatch({
            type: MonsterActions.ADD_MONSTER,
            payload: response.data?.monster,
          });
        }
      },
    );
  };

  return (
    <Toolbar>
      <ToolbarButton
        label="Add Monster"
        variant="solid"
        size="md"
        colorScheme="primary"
        onClick={onToggle}
      />
      <ToolbarButton
        label="Remove All"
        variant="solid"
        size="md"
        colorScheme="primary"
        onClick={() => dispatch({ type: MonsterActions.CLEAR_MONSTERS })}
      />
      <CommandBar
        onSelect={(value) => {
          addMonster(value);
        }}
        isOpen={isOpen}
        onClose={onClose}
        closeOnSelect
      >
        <CommandBarDialog>
          <CommandBarContent>
            <CommandBarInput
              placeholder="Type a command or search..."
              autoFocus
            />

            <CommandBarList>
              {loading && <CommandBarLoading>Hang on…</CommandBarLoading>}

              <CommandBarEmpty>No results found.</CommandBarEmpty>

              {monsters?.map(({ name, index }) => {
                return (
                  <CommandBarItem key={index} value={index}>
                    {name}
                  </CommandBarItem>
                );
              })}
            </CommandBarList>
          </CommandBarContent>
        </CommandBarDialog>
      </CommandBar>
    </Toolbar>
  );
};
