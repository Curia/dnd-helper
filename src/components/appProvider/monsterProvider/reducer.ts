// Constants
import { MonsterActions } from './types';

// Types
import type { MonsterState, MonsterAction } from './types';

export const monsterReducer = (state: MonsterState, action: MonsterAction): MonsterState => {
  switch (action.type) {
    case MonsterActions.ADD_MONSTER:
      return {
        ...state,
        monsters: [...state.monsters, action.payload],
      };
    case MonsterActions.REMOVE_MONSTER:
      return {
        ...state,
        monsters: state.monsters.filter((monster) => monster.index !== action.payload),
      };
    case MonsterActions.CLEAR_MONSTERS:
      return {
        ...state,
        monsters: []
      };
    case MonsterActions.DUPLICATE_MONSTER:
      const monsterToDuplicate = state.monsters.find(
        (monster) => monster.index === action.payload
      );
      if (!monsterToDuplicate) {
        return state; // If the monster to duplicate is not found, return the current state unchanged
      }

      const duplicatedMonster = {
        ...monsterToDuplicate,
      };

      return {
        ...state,
        monsters: [...state.monsters, duplicatedMonster],
      };
    default:
      return state;
  }
};