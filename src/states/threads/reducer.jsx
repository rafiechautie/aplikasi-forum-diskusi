import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.UP_VOTE_THREAD:
      return threads.map((thread) => {
        // memilih thread mana yang ingin di upvote
        if (thread.id === action.payload.threadId) {
          return {
            // destrukturisasi
            ...thread,
            // memeriksa apakah pengguna melakukan tindakan upvote atau ngak
            upVoteBy: thread.upVoteBy.includes(action.payload.userId)
            // jika user tidak upvote threadnya, maka dilakukan penghapusan data userId
            // yang ingin ngelike
              ? thread.upVoteBy.filter((id) => id !== action.payload.userId)
            // jika user melakukan upvote maka dilakukan penggabungan array antara thread yang
            // dilike dengan userId yang ngelike
              : thread.upVoteBy.concat([action.payload.userId]),
          };
        }
        return thread;
      });
    case ActionType.DOWN_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            downVoteby: thread.downVoteby.includes(action.payload.userId)
              ? thread.downVoteby.filter((id) => id !== action.payload.userId)
              : thread.upVoteBy.concat([action.payload.userId]),
          };
        }
        return threads;
      });
    default:
      return threads;
  }
}

export default threadsReducer;