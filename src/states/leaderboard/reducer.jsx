import { ActionType } from './action';

function leaderboardReducer(leaderboards = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARDS:
      return action.payload.leaderboard;
    default:
      return leaderboards;
  }
}
export default leaderboardReducer;