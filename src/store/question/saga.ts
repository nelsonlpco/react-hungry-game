/* eslint-disable @typescript-eslint/no-explicit-any */
import { delay, put, select, takeLatest } from 'redux-saga/effects';
import { CssAnimations } from 'theme/index';
import questionActions, {
  QuestionAction,
  QuestionActionTypes,
} from './actions';
import gameActions from '../game/actions';
import gameSeletors from '../game/selectors';
import pt from '../globalization/pt';

function* setFood({ payload: food }: QuestionAction<string>): any {
  const npcQuestionNode = yield select(gameSeletors.getQuestionNode);
  yield put(questionActions.setFood(food));
  yield put(questionActions.setShowFoodModal(false));
  yield put(gameActions.setAnimation(CssAnimations.slidRight));
  yield put(
    questionActions.setCurrentQuestion(
      pt.whatsYourFoodIsThatFoodIsNot(food, npcQuestionNode.Question),
    ),
  );
  yield delay(300);
  yield put(gameActions.setAnimation(CssAnimations.slidIn));
}

function* setQuality({ payload: quality }: QuestionAction<string>) {
  yield put(questionActions.setQuality(quality));
  yield delay(300);
  yield put(gameActions.setUserFavoriteFoodAsync());
}

export default [
  takeLatest(QuestionActionTypes.SET_FOOD_ASYNC, setFood),
  takeLatest(QuestionActionTypes.SET_QUALITY_ASYNC, setQuality),
];
