import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import {persistReducer, persistStore} from 'redux-persist';
import authSlice from './authSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whiteList: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, authSlice);

const rootReducer = combineReducers({
  auth: persistedReducer,
});

const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export default store;
export const persistVal = persistStore(store);
