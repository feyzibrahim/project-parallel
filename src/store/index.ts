import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

import authSlice from './slices/authSlice';
import authenticationSlice from './slices/authenticationSlice';
import packageSlice from './slices/packageSlice';
import bookingSlice from './slices/bookingSlice';
import resultSlice from './slices/resultSlice';
import gameSlice from './slices/gameSlice';
import userSlice from './slices/userSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: [],
};

const rootReducer = combineReducers({
  auth: authSlice,
  authentication: authenticationSlice,
  games: gameSlice,
  packages: packageSlice,
  booking: bookingSlice,
  result: resultSlice,
  users: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
