import { combineReducers } from 'redux';
import { ApplicationState } from './types';
import questionReducer from './question/reducer';

export default combineReducers<ApplicationState>({
  question: questionReducer,
});
