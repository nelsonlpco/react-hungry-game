/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all } from 'redux-saga/effects';

import questionSagas from './question/saga';

function* rootSagas() {
  yield all([...questionSagas]);
}

export default rootSagas;
