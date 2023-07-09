import React from "react";

import { Button, Center, useDisclosure } from "@chakra-ui/react";
import {
  CommandBar,
  CommandBarDialog,
  CommandBarContent,
  CommandBarInput,
  CommandBarList,
  CommandBarGroup,
  CommandBarItem,
  CommandBarSeparator,
  CommandBarLoading,
  CommandBarEmpty,
} from '@saas-ui/command-bar';
import {
  FiUserCheck,
  FiUser,
  FiCircle,
  FiBarChart,
  FiTag,
  FiCalendar,
} from 'react-icons/fi';
import { ConstantsContext, useGetConstants } from "../appProvider/constantsProvider";

const items = [
  {
    icon: <FiUserCheck />,
    label: 'Assign to...',
    shortcut: 'A',
  },
  {
    icon: <FiUser />,
    label: 'Assign to me',
    shortcut: 'I',
  },
  {
    icon: <FiCircle />,
    label: 'Change status...',
    shortcut: 'S',
  },
  {
    icon: <FiTag />,
    label: 'Change labels...',
    shortcut: 'L',
  },
  {
    icon: <FiTag />,
    label: 'Remove label...',
    shortcut: '⇧ L',
  },
]

export const AddMonster: React.FC = ({ }) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [isLoading, setLoading] = React.useState(false);

  const { monsters } = useGetConstants();

  return (
    <Center gap={'10px'} m={5}>
      <Button colorScheme='green' onClick={onToggle}>Add Monster</Button>
      <Button colorScheme='red'>Remove All</Button>

      <CommandBar
        onChange={(value) => console.log(value)}
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
              {isLoading && <CommandBarLoading>Hang on…</CommandBarLoading>}

              <CommandBarEmpty>No results found.</CommandBarEmpty>

              {monsters?.map(({ name, index }) => {
                return (
                  <CommandBarItem key={index} value={name}>
                    {name}
                  </CommandBarItem>
                )
              })}
            </CommandBarList>
          </CommandBarContent>
        </CommandBarDialog>
      </CommandBar>
    </Center>
  )

}