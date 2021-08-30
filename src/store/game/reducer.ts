import OptionNodeModel from 'store/domain/model/option-model';
import { ActionType } from 'store/types';
import { CssAnimations } from 'theme/index';
import { GameActionType } from './actions';

export type GameState = {
  question?: OptionNodeModel;
  showWinnerModal: boolean;
  showQuestionModal: boolean;
  animation: CssAnimations;
};

const InitialState: GameState = {
  showWinnerModal: false,
  showQuestionModal: false,
  animation: CssAnimations.slidIn,
};

function setResponse(
  state: GameState,
  { payload }: ActionType<GameActionType, OptionNodeModel>,
): GameState {
  return {
    ...state,
    question: payload,
  };
}

function showWinnerModal(
  state: GameState,
  { payload }: ActionType<GameActionType, boolean>,
): GameState {
  return {
    ...state,
    showWinnerModal: payload,
  };
}

function showQuestionModal(
  state: GameState,
  { payload }: ActionType<GameActionType, boolean>,
): GameState {
  return {
    ...state,
    showQuestionModal: payload,
  };
}

function setAnimation(
  state: GameState,
  { payload }: ActionType<GameActionType, CssAnimations>,
): GameState {
  return {
    ...state,
    animation: payload,
  };
}

export default (
  state: GameState = InitialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: ActionType<GameActionType, any>,
): GameState => {
  switch (action.type) {
    case GameActionType.SET_RESPONSE:
      return setResponse(state, action);
    case GameActionType.SHOW_QUESTION_MODAL:
      return showQuestionModal(state, action);
    case GameActionType.SHOW_WINNER_MODAL:
      return showWinnerModal(state, action);
    case GameActionType.SET_ANIMATION:
      return setAnimation(state, action);
    default:
      return state;
  }
};
