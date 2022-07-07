export const initalState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCmQilAyRAESYB20PUUIM23lhl-4MJR8TueAanirwACBBi70cbVxImN9fOgvsWCRg5fbArIXtlWM4phelEO_QzPP3kjJxDpO0M-7N55noo529x1RHJg_jD3mLCJFy3ml5fQjbHm2lZhj4ejhk79NQ8pSPLUtX1FPh505mxObf0prfTModi6XLvcxjMnJ1IeivPKjklm1Q",
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
    default:
      return state;
  }
};

export default reducer;
