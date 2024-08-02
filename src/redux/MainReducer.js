import { combineReducers } from 'redux';
import itemReducer from './MovieItem';
import userReducer from './user';

const MainReducer= combineReducers({itemReducer, userReducer})

export default MainReducer
