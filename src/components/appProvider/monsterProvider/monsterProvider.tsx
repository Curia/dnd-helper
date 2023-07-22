import React, { createContext, useReducer } from 'react';
import { MonsterState, MonsterAction } from './types';
import { monsterReducer, } from './reducer';

export const initialMonsterState: MonsterState = {
  monsters: [],
};

export const MonsterContext = createContext<{
  state: MonsterState;
  dispatch: React.Dispatch<MonsterAction>;
}>({
  state: initialMonsterState,
  dispatch: () => null,
});

export const MonsterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(monsterReducer, initialMonsterState);

  return (
    <MonsterContext.Provider value={{ state, dispatch }}>{children}</MonsterContext.Provider>
  );
};

