import React, { createContext, useReducer, useEffect, useState } from 'react';

// Types
import { MonsterState, MonsterAction, MonsterActions } from './types';

// Reducer
import { monsterReducer } from './reducer';

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

export const MonsterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(monsterReducer, initialMonsterState);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Load monsters from localStorage on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if running on the client side
      const storedMonsters =
        JSON.parse(localStorage.getItem('savedMonsters')) || [];
      // Update state with storedMonsters
      dispatch({ type: MonsterActions.LOAD_MONSTERS, payload: storedMonsters });
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
    } else {
      localStorage.setItem('savedMonsters', JSON.stringify(state.monsters));
    }
  }, [state]);

  return (
    <MonsterContext.Provider value={{ state, dispatch }}>
      {children}
    </MonsterContext.Provider>
  );
};
