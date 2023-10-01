import { Monster } from '@/gql';

export interface BattleMonster extends Partial<Monster> {
  uuid: string;
}

export interface MonsterState {
  monsters: BattleMonster[];
}

export enum MonsterActions {
  LOAD_MONSTERS = 'LOAD_MONSTERS',
  ADD_MONSTER = 'ADD_MONSTER',
  DELETE_MONSTER = 'DELETE_MONSTER',
  COPY_MONSTER = 'COPY_MONSTER',
  CLEAR_MONSTERS = 'CLEAR_MONSTERS',
  DUPLICATE_MONSTER = 'DUPLICATE_MONSTER',
}

export type MonsterAction =
  | { type: MonsterActions.LOAD_MONSTERS; payload: BattleMonster[] }
  | { type: MonsterActions.ADD_MONSTER; payload: Monster }
  | { type: MonsterActions.DELETE_MONSTER; payload: string }
  | { type: MonsterActions.COPY_MONSTER; payload: BattleMonster }
  | { type: MonsterActions.CLEAR_MONSTERS }
  | { type: MonsterActions.DUPLICATE_MONSTER; payload: string };
