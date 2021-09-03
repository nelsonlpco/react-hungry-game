import { QuestionState } from './question/reducer';

export interface ActionType<T, P> {
  type: T;
  payload: P;
}

export type ReducerType<S> = (state: S, action: ActionType<any, any>) => S;

export type ApplicationState = {
  question: QuestionState;
};
