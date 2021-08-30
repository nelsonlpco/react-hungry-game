import OptionNodeModel from 'store/domain/model/option-model';
import { ApplicationState } from 'store/types';
import { GameState } from './reducer';
import pt from '../globalization/pt';

function getState(state: ApplicationState): GameState {
  return state.game;
}

function getQuestion(state: ApplicationState): string {
  return pt.theFoodIs(getState(state).question?.Question ?? '');
}

function getQuestionNode(state: ApplicationState): OptionNodeModel | undefined {
  return getState(state).question;
}

function showWinnerModal(state: ApplicationState): boolean {
  return getState(state).showWinnerModal;
}

function showQuestionModal(state: ApplicationState): boolean {
  return getState(state).showQuestionModal;
}

function getAnimation(state: ApplicationState): string {
  return getState(state).animation;
}

function showYesNoCard(state: ApplicationState): boolean {
  return !showWinnerModal(state) && !showQuestionModal(state);
}

export default {
  getState,
  getQuestion,
  getQuestionNode,
  showWinnerModal,
  showQuestionModal,
  getAnimation,
  showYesNoCard,
};
