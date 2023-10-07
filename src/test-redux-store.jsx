import store from './states/index';

import { setAuthUserActionCreator, unsetAuthUserActionCreator } from './states/auth/action';

store.subscribe(() => {
  console.log('Current State', store.getState());
});

// dispatch beberapa tindakan
store.dispatch(setAuthUserActionCreator('test login'));
store.dispatch(unsetAuthUserActionCreator());