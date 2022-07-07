export const initalState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   token:
  //     "BQCmQilAyRAESYB20PUUIM23lhl-4MJR8TueAanirwACBBi70cbVxImN9fOgvsWCRg5fbArIXtlWM4phelEO_QzPP3kjJxDpO0M-7N55noo529x1RHJg_jD3mLCJFy3ml5fQjbHm2lZhj4ejhk79NQ8pSPLUtX1FPh505mxObf0prfTModi6XLvcxjMnJ1IeivPKjklm1Q",
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
