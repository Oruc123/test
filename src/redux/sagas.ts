import { takeEvery, call, put } from "redux-saga/effects";
import * as actions from "./actions";
import { FETCH_POSTS } from "./types";
function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS, fetchPost);
}

function* fetchPost() {
  yield put({ type: "REQUEST_POST" });
  try {
    const data = yield call(() => {
      return fetch("http://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      );
    });
    localStorage.setItem("data", JSON.stringify(data));
    yield put(actions.fetchPostsSuccess(data));
  } catch (error) {
    yield put(actions.fetchPostsError());
  }
}
export default watchFetchPosts;
