import React from "react";
import { Card } from "react-bootstrap";
import { IPost } from "../redux/types";
interface PostPorps extends IPost {
  handleClick: () => void;
}
function Post(props: PostPorps) {
  return (
    <Card onClick={props.handleClick} className="h-100 ">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.body.substring(0, 100)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Post;
