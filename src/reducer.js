export const initalState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover__weekly: action.discover_weekly,
      };
    case "CURRENTLY_PLAYING_TRACK":
      return {
        ...state,
        current_track: action.current_track,
      };
    case "RECENT_TRACKS":
      return {
        ...state,
        recent_tracks: action.recent_tracks,
      };
      case "FEATURED":
        return {
          ...state,
          featured: action.featured
        }
    default:
      return state;
  }
};

export default reducer;
