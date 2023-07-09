import React, { createContext, useEffect, useState, useContext } from 'react';

import { useGetMonstersLazyQuery } from '@/gql';

enum LOCAL_STORAGE_KEYS {
  MONSTERS = 'monsters',
  ITEMS = 'items'
}

interface IMonster {
  name: string, index: string
}

interface ConstantsContext {
  monsters: IMonster[] | null;
}

export const useGetConstants = () => {
  const constants = useContext(ConstantsContext);

  return { monsters: constants?.monsters }
}

export const ConstantsContext = createContext<ConstantsContext | undefined>(undefined);

export const ConstantsProvider = ({ children }: { children: React.ReactNode }) => {
  const [monstersData, setMonstersData] = useState<IMonster[] | null>(null);
  const [getMonsters, { data: monsterData }] = useGetMonstersLazyQuery();

  useEffect(() => {
    const localStorageMonsters = localStorage.getItem(LOCAL_STORAGE_KEYS.MONSTERS);

    if (!localStorageMonsters) {
      getMonsters({ variables: { limit: 1000 } }).then((response) => {
        if (response.data?.monsters) {
          localStorage.setItem(LOCAL_STORAGE_KEYS.MONSTERS, JSON.stringify(response.data?.monsters));
          setMonstersData(response.data?.monsters);
        }
      })
    } else {

      if (localStorageMonsters.length) {
        setMonstersData(JSON.parse(localStorageMonsters));
      }


    }
  }, [getMonsters]);


  return (
    <ConstantsContext.Provider value={{ monsters: monstersData }}>
      {children}
    </ConstantsContext.Provider>
  );
};