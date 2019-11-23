import { combineReducers } from 'redux';

import movies from './moviesReducer';
import characters from './charactersReducer';

export default combineReducers({
  movies,
  characters
});
