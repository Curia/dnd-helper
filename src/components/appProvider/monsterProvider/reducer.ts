// Constants
import { MonsterActions } from './types';

// Types
import type { MonsterState, MonsterAction, BattleMonster } from './types';

// Functions
import { v4 as uuidv4 } from 'uuid';

export const monsterReducer = (
  state: MonsterState,
  action: MonsterAction,
): MonsterState => {
  switch (action.type) {
    case MonsterActions.LOAD_MONSTERS: {
      return {
        ...state,
        monsters: [...action.payload],
      };
    }
    case MonsterActions.ADD_MONSTER: {
      const monsterToAdd: BattleMonster = {
        uuid: uuidv4(),
        ...action.payload,
      };
      return {
        ...state,
        monsters: [...state.monsters, monsterToAdd],
      };
    }
    case MonsterActions.DELETE_MONSTER: {
      return {
        ...state,
        monsters: state.monsters.filter(
          (monster) => monster.uuid !== action.payload,
        ),
      };
    }
    case MonsterActions.COPY_MONSTER: {
      const monsterToDuplicate = state.monsters.find(
        (monster) => monster.uuid === action.payload.uuid,
      );
      if (!monsterToDuplicate) {
        return state;
      }

      const duplicatedMonster = {
        ...monsterToDuplicate,
        uuid: uuidv4(), // Generate a new UUID for the duplicated monster
      };

      return {
        ...state,
        monsters: [...state.monsters, duplicatedMonster],
      };
    }
    case MonsterActions.CLEAR_MONSTERS: {
      return {
        ...state,
        monsters: [],
      };
    }
    case MonsterActions.DUPLICATE_MONSTER: {
      const monsterToDuplicate = state.monsters.find(
        (monster) => monster.index === action.payload,
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
    }
    default:
      return state;
  }
};
