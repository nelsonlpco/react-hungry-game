import { ActionType } from 'store/types';

export enum QuestionActionTypes {
  SET_FOOD_ASYNC = '@QUESTION/SET_FOOD_ASYNC',
  SET_QUALITY_ASYNC = '@QUESTION/SET_QUALITY_ASYNC',
  SET_FOOD = '@QUESTION/SET_FOOD',
  SET_QUALITY = '@QUESTION/SET_QUALITY',
  SET_CURRENT_QUESTION = '@QUESTION/SET_CURRENT_QUESTION',
  SET_SHOW_FOOD_MODAL = '@QUESTION/SET_SHOW_FOOD_MODAL',
  CLEAR = '@QUESTION/CLEAR',
}

export type QuestionAction<T> = ActionType<QuestionActionTypes, T>;

function setFood(food: string): QuestionAction<string> {
  return {
    type: QuestionActionTypes.SET_FOOD,
    payload: food,
  };
}

function setQuality(quality: string): QuestionAction<string> {
  return {
    type: QuestionActionTypes.SET_QUALITY,
    payload: quality,
  };
}

function setFoodAsync(food: string): QuestionAction<string> {
  return {
    type: QuestionActionTypes.SET_FOOD_ASYNC,
    payload: food,
  };
}

function setQualityAsync(quality: string): QuestionAction<string> {
  return {
    type: QuestionActionTypes.SET_QUALITY_ASYNC,
    payload: quality,
  };
}

function setCurrentQuestion(question: string): QuestionAction<string> {
  return {
    type: QuestionActionTypes.SET_CURRENT_QUESTION,
    payload: question,
  };
}

function setShowFoodModal(status: boolean): QuestionAction<boolean> {
  return {
    type: QuestionActionTypes.SET_SHOW_FOOD_MODAL,
    payload: status,
  };
}

function clear(): QuestionAction<void> {
  return {
    type: QuestionActionTypes.CLEAR,
    payload: undefined,
  };
}

export default {
  setFoodAsync,
  setQualityAsync,
  setFood,
  setQuality,
  setCurrentQuestion,
  setShowFoodModal,
  clear,
};
