export const REQUEST_POST = "REQUEST_POST";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";

export interface IPost {
  id: number;
  title: string;
  body: string;
}
export interface IState {
  posts: Array<IPost>;
  loading: boolean;
  errors: boolean;
}
