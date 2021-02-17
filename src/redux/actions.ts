import * as types from "./types";
export const requestPost = () => ({ type: types.REQUEST_POST });
export const fetchPosts = () => ({
  type: types.FETCH_POSTS,
});
export const fetchPostsSuccess = (data: Array<types.IPost>) => ({
  type: types.FETCH_POST_SUCCESS,
  payload: data,
});
export const fetchPostsError = () => ({
  type: types.FETCH_POST_ERROR,
});
