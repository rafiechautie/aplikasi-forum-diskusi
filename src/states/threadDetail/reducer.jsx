import { ActionType } from './action';

function threadDetailReducer(detailThread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return ActionType.RECEIVE_THREAD_DETAIL;
    case ActionType.ADD_COMMENT:
      return {
        ...detailThread,
        comments: [action.payload.comment, ...detailThread.comments],
      };
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.UP_VOTE_DETAIL_THREAD:
      return {
        ...detailThread,
        upVoteBy: detailThread.upVoteBy.includes(action.payload.userId)
        // jika user tidak upvote threadnya, maka dilakukan penghapusan data userId
        // yang ingin ngelike
          ? detailThread.upVoteBy.filter((id) => id !== action.payload.userId)
        // jika user melakukan upvote maka dilakukan penggabungan array antara thread yang
        // dilike dengan userId yang ngelike
          : detailThread.upVoteBy.concat([action.payload.userId]),
        downVoteBy: detailThread.downVoteBy.filter((id) => id !== action.payload.userId),
      };
    case ActionType.DOWN_VOTE_DETAIL_THREAD:
      return {
        ...detailThread,
        downVoteBy: detailThread.downVoteBy.includes(action.payload.userId)
          ? detailThread.downVoteBy.filter((id) => id !== action.payload.userId)
          : detailThread.downVoteBy.concat([action.payload.userId]),
        upVoteBy: detailThread.upVoteBy.filter((id) => id !== action.payload.userId),
      };
    case ActionType.UP_VOTE_COMMENT_THREAD:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVoteBy: comment.upVoteBy.includes(action.payload.userId)
                ? comment.upVoteBy.filter((id) => id !== action.payload.userId)
                : comment.upVoteBy.concat([action.payload.userId]),
              downVoteBy: comment.downVoteBy.filter((id) => id !== action.payload.userId),
            };
          }
          return comment;
        }),
      };
    case ActionType.DOWN_VOTE_COMMENT_THREAD:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              downVoteBy: comment.downVoteBy.includes(action.payload.userId)
                ? comment.downVoteBy.filter((id) => id !== action.payload.userId)
                : comment.downVoteBy.concat([action.payload.userId]),
              upVoteBy: comment.upVoteBy.filter((id) => id !== action.payload.userId),
            };
          }
          return comment;
        }),
      };
    default:
      return detailThread;
  }
}

export default threadDetailReducer;