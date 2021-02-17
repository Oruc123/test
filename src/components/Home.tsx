import React, { useEffect, useState, useCallback } from "react";
import { Alert, Spinner } from "react-bootstrap";
import Posts from "./Posts";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import { IState } from "../redux/types";
const Home = () => {
  const { posts, loading } = useSelector((state: IState) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());

    const interval = setInterval(() => {
      dispatch(fetchPosts());
    }, 30000 * 3);

    return () => clearInterval(interval);
  }, [dispatch]);
  if (loading) {
    return <Spinner className="mx-auto" animation="border" variant="primary" />;
  }
  if (posts.length) {
    return (
      <>
        <Posts posts={posts} />
      </>
    );
  }

  return <Alert variant="danger">OOPS! Fetch error</Alert>;
};

export default Home;
