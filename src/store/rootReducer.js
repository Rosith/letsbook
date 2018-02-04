import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import authReducer from './reducers/authReducer';

const root = combineReducers({
  router: routerReducer,
  auth: authReducer,

});

export default root;