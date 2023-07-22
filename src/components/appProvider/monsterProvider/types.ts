import { Monster } from '@/gql';

export interface MonsterState {
  monsters: Partial<Monster>[];
}

export enum MonsterActions {
  ADD_MONSTER = 'ADD_MONSTER',
  REMOVE_MONSTER = 'REMOVE_MONSTER',
  CLEAR_MONSTERS = 'CLEAR_MONSTERS',
  DUPLICATE_MONSTER = 'DUPLICATE_MONSTER',
}

export type MonsterAction =
  | { type: MonsterActions.ADD_MONSTER; payload: Partial<Monster> }
  | { type: MonsterActions.REMOVE_MONSTER; payload: string }
  | { type: MonsterActions.CLEAR_MONSTERS }
  | { type: MonsterActions.DUPLICATE_MONSTER; payload: string };
