import { combineReducers } from 'redux';
import blockchain from './blockchain';
import auth from './auth';

export default combineReducers({
   blockchain,
   auth
})