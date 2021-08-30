import { GameState } from './game/reducer';
import { QuestionState } from './question/reducer';

export interface ActionType<T, P> {
  type: T;
  payload: P;
}

export type ReducerType<S> = (state: S, action: ActionType<any, any>) => S;

export type ApplicationState = {
  game: GameState;
  question: QuestionState;
};
