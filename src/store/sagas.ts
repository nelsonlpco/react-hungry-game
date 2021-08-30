/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all } from 'redux-saga/effects';

import gameSagas from './game/sagas';
import questionSagas from './question/saga';

function* rootSagas() {
  yield all([...gameSagas, ...questionSagas]);
}

export default rootSagas;
