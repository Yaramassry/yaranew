import { combineReducers } from 'redux';
import albumReducer from './albumReducer';
import loginReducers from './loginReducers';

export default combineReducers({
  albumR: albumReducer,
  loginR: loginReducers ,
});
