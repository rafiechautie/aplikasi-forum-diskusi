import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';

import authUserReducer from './auth/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;