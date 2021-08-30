/* eslint-disable @typescript-eslint/no-explicit-any */
import { takeLatest, put, select, delay } from 'redux-saga/effects';
import DecisionTree from 'store/domain/decision-tree';
import { CssAnimations } from 'theme/index';
import { UserResponse } from '../domain/model/option-model';
import gameActions, { GameActionType, GameAction } from './actions';
import gameSelectors from './selectors';
import questionSelectors from '../question/selectors';
import questionActions from '../question/actions';

const decisionTree = new DecisionTree('Massa', 'Lasanha', 'Bolo de chocolate');

function* runCase({ payload: userResponse }: GameAction<UserResponse>): any {
  const sayYes = userResponse === UserResponse.yes;

  if (sayYes) {
    yield put(gameActions.setAnimation(CssAnimations.slidRight));
  } else {
    yield put(gameActions.setAnimation(CssAnimations.slidLeft));
  }

  const currentQuestion = yield select(gameSelectors.getQuestionNode);
  const question = yield decisionTree.runCase(userResponse, currentQuestion);

  yield put(gameActions.setResponse(question));
  yield delay(300);

  if (decisionTree.isEnptyOptions) {
    if (sayYes) {
      yield put(gameActions.showWinnerModal(true));
    } else {
      yield put(gameActions.showQuestionModal(true));
    }
  }

  yield put(gameActions.setAnimation(CssAnimations.slidIn));
}

function* setUserFavoriteFood(): any {
  const currentQuestion = yield select(gameSelectors.getQuestionNode);
  const favoriteFood = yield select(questionSelectors.getFavoriteFood);
  const foodQuality = yield select(questionSelectors.getFoodQuality);

  yield decisionTree.addFavoriteFood(
    currentQuestion,
    favoriteFood,
    foodQuality,
  );

  yield put(gameActions.start());
}

function* start() {
  yield put(gameActions.showWinnerModal(false));
  yield put(gameActions.showQuestionModal(false));
  yield put(gameActions.setResponse(decisionTree.Root));
  yield put(questionActions.clear());
}

export default [
  takeLatest(GameActionType.START, start),
  takeLatest(GameActionType.ANSWER_ASYNC, runCase),
  takeLatest(GameActionType.SET_USER_FAVORITE_FOOD_ASYNC, setUserFavoriteFood),
];
