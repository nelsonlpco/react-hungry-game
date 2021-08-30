import { ApplicationState } from 'store/types';
import { QuestionState } from './reducer';

function getState(state: ApplicationState): QuestionState {
  return state.question;
}

function getQuestion(state: ApplicationState): string {
  return getState(state).currentQuestion;
}

function getFavoriteFood(state: ApplicationState): string {
  return getState(state).food;
}

function getFoodQuality(state: ApplicationState): string {
  return getState(state).quality;
}

function showFoodModal(state: ApplicationState): boolean {
  return getState(state).showFoodModal;
}
export default {
  getState,
  getQuestion,
  getFavoriteFood,
  getFoodQuality,
  showFoodModal,
};
