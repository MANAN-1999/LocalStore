import { combineReducers } from 'redux';
import authReducer from './authSlice';
// Import other reducers here

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here
});

export default rootReducer;
