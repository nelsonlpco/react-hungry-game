import { combineReducers } from 'redux';
import { ApplicationState } from './types';
import gameReducer from './game/reducer';
import questionReducer from './question/reducer';

export default combineReducers<ApplicationState>({
  game: gameReducer,
  question: questionReducer,
});
