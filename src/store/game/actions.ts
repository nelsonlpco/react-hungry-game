import OptionNodeModel, { UserResponse } from 'store/domain/model/option-model';
import { ActionType } from 'store/types';
import { CssAnimations } from 'theme/index';

export enum GameActionType {
  START = '@GAME/START',
  ANSWER_ASYNC = '@GAME/ANSWER_ASYNC',
  SET_USER_FAVORITE_FOOD_ASYNC = '@GAME/SET_USER_FAVORITE_FOOD_ASYNC',
  SET_RESPONSE = '@GAME/SET_RESPONSE',
  SHOW_WINNER_MODAL = '@GAME/SHOW_WINNER_MODAL',
  SHOW_QUESTION_MODAL = '@GAME/SHOW_QUESTION_MODAL',
  SET_ANIMATION = '@GAME/SET_ANIMATION',
}

export type GameAction<T> = ActionType<GameActionType, T>;

function start(): GameAction<void> {
  return {
    type: GameActionType.START,
    payload: undefined,
  };
}

function answerAsync(response: UserResponse): GameAction<UserResponse> {
  return {
    type: GameActionType.ANSWER_ASYNC,
    payload: response,
  };
}

function setUserFavoriteFoodAsync(): GameAction<undefined> {
  return {
    type: GameActionType.SET_USER_FAVORITE_FOOD_ASYNC,
    payload: undefined,
  };
}

function setResponse(response: OptionNodeModel): GameAction<OptionNodeModel> {
  return {
    type: GameActionType.SET_RESPONSE,
    payload: response,
  };
}

function showQuestionModal(status: boolean): GameAction<boolean> {
  return {
    type: GameActionType.SHOW_QUESTION_MODAL,
    payload: status,
  };
}

function showWinnerModal(status: boolean): GameAction<boolean> {
  return {
    type: GameActionType.SHOW_WINNER_MODAL,
    payload: status,
  };
}

function setAnimation(animation: CssAnimations): GameAction<CssAnimations> {
  return {
    type: GameActionType.SET_ANIMATION,
    payload: animation,
  };
}

export default {
  start,
  setResponse,
  showQuestionModal,
  showWinnerModal,
  setAnimation,
  answerAsync,
  setUserFavoriteFoodAsync,
};
