import * as types from "./types";
const initialState: types.IState = {
  loading: false,
  posts: [],
  errors: false,
};
const reducer = (
  state = initialState,
  action: { type: string; payload: [types.IPost] }
) => {
  switch (action.type) {
    case types.REQUEST_POST:
      return { ...state, loading: true, errors: false };
    case types.FETCH_POST_SUCCESS:
      return { ...state, posts: action.payload, loading: false };
    case types.FETCH_POST_ERROR:
      return { ...state, errors: true, loading: false };
    default:
      return state;
  }
};

export default reducer;
