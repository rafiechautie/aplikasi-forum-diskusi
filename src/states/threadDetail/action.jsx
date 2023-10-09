import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMMENT',
  UP_VOTE_DETAIL_THREAD: 'UP_VOTE_DETAIL_THREAD',
  DOWN_VOTE_DETAIL_THREAD: 'DOWN_VOTE_DETAIL_THREAD',
  UP_VOTE_COMMENT_THREAD: 'UP_VOTE_COMMENT_THREAD',
  DOWN_VOTE_COMMENT_THREAD: 'DOWN_VOTE_COMMENT_THREAD',
};

function receiveThreadDetailActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      detailThread,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function upVoteDetailThread({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_DETAIL_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteDetailThread({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_DETAIL_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function upVoteCommentThread({ commentId, userId }) {
  return {
    type: ActionType.UP_VOTE_COMMENT_THREAD,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentThread({ commentId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT_THREAD,
    payload: {
      commentId,
      userId,
    },
  };
}

// fungsi untuk menangani proses menampilkan thread detail
function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());
    try {
      const threadDetail = await api.getThreadsDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

// fungsi untuk menangani proses menambah comment
function asyncAddComment({ content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment(content);
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

// fungsi untuk up vote thread dari halaman detail
function asyncUpVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(upVoteDetailThread({ threadId, userId: authUser.id }));

    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(upVoteDetailThread({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

// fungsi untuk down Vote thread dari halaman detail
function asyncDownVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(downVoteDetailThread({ threadId, userId: authUser.id }));

    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(downVoteDetailThread({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

// fungsi untuk up vote comment dari halaman detail
function asyncUpVoteCommentDetail(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(upVoteCommentThread({ commentId, userId: authUser.id }));

    try {
      await api.upVoteComments(commentId);
    } catch (error) {
      alert(error.message);
      dispatch(upVoteCommentThread({ commentId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

// fungsi untuk down vote comment dari halaman detail
function asyncDownVoteCommentDetail(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(downVoteCommentThread({ commentId, userId: authUser.id }));

    try {
      await api.downVoteComments(commentId);
    } catch (error) {
      alert(error.message);
      dispatch(downVoteCommentThread({ commentId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  addCommentActionCreator,
  upVoteDetailThread,
  downVoteDetailThread,
  upVoteCommentThread,
  downVoteCommentThread,
  asyncReceiveThreadDetail,
  asyncAddComment,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncUpVoteCommentDetail,
  asyncDownVoteCommentDetail,
};