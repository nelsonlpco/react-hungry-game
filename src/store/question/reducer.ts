/* eslint-disable @typescript-eslint/no-explicit-any */
import { QuestionAction, QuestionActionTypes } from './actions';
import pt from '../globalization/pt';

export type QuestionState = {
  food: string;
  quality: string;
  currentQuestion: string;
  showFoodModal: boolean;
};

const DefaultState: QuestionState = {
  food: '',
  quality: '',
  currentQuestion: pt.whatsYourFavoriteFood,
  showFoodModal: true,
};

function clear(): QuestionState {
  return {
    ...DefaultState,
  };
}

function setFood(
  state: QuestionState,
  { payload: food }: QuestionAction<string>,
): QuestionState {
  return {
    ...state,
    food,
  };
}

function setQuality(
  state: QuestionState,
  { payload: quality }: QuestionAction<string>,
): QuestionState {
  return {
    ...state,
    quality,
  };
}

function setCurrentQuestion(
  state: QuestionState,
  { payload: currentQuestion }: QuestionAction<string>,
): QuestionState {
  return {
    ...state,
    currentQuestion,
  };
}

function setShowFoodModal(
  state: QuestionState,
  { payload: status }: QuestionAction<boolean>,
): QuestionState {
  return {
    ...state,
    showFoodModal: status,
  };
}

export default (
  state = DefaultState,
  action: QuestionAction<any>,
): QuestionState => {
  switch (action.type) {
    case QuestionActionTypes.CLEAR:
      return clear();
    case QuestionActionTypes.SET_FOOD:
      return setFood(state, action);
    case QuestionActionTypes.SET_QUALITY:
      return setQuality(state, action);
    case QuestionActionTypes.SET_CURRENT_QUESTION:
      return setCurrentQuestion(state, action);
    case QuestionActionTypes.SET_SHOW_FOOD_MODAL:
      return setShowFoodModal(state, action);
    default:
      return state;
  }
};
