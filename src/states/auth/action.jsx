import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

// menetapkan authUser
function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

// Menghapus authUser
function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

// fungsi thunk untuk digunakan pada proses login
function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile;
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

// fungsi thunk untuk handle logout dan mengembalikan nilai authUser ke null
function asyncUnSetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    // set token ke null
    api.putAccessToken('');
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnSetAuthUser,
};