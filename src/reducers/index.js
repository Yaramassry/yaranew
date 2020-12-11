import { combineReducers } from 'redux';
import albumReducer from './albumReducer';
import loginReducers from './loginReducers';
import citiesReducers from './citiesReducers';

export default combineReducers({
  albumR: albumReducer,
  loginR: loginReducers ,
  citiesR:citiesReducers,
});
