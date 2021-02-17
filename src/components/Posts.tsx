import React, { useCallback, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { IPost } from "../redux/types";
import Post from "./Post";
import Dialog from "./Dialog";
const Posts = ({ posts }: { posts: Array<IPost> }) => {
  const [show, setShow] = useState<boolean>(false);
  const [id, setId] = useState<number | null>(null);
  const handleShow = (id: number) => {
    setShow(true);
    setId(id);
  };

  const handleClose = useCallback(() => {
    setShow(false);
  }, [show]);

  return (
    <>
      <Row>
        {posts.length &&
          posts.map((post) => (
            <Col className="my-2" key={post.id} xs={6} md={4}>
              <Post handleClick={() => handleShow(post.id)} {...post} />
            </Col>
          ))}
      </Row>
      {show && <Dialog handleClose={handleClose} id={id} />}
    </>
  );
};

export default Posts;
