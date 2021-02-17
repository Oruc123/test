import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { IPost, IState } from "../redux/types";

interface IDialog {
  id: number | null;
  handleClose: () => void;
}
const Dialog: React.FC<IDialog> = ({ id, handleClose }) => {
  const post = useSelector((state: IState) =>
    state.posts.find((el: IPost) => el.id === id)
  );
  return (
    <Modal onHide={handleClose} show={true}>
      <Modal.Header closeButton>
        <Modal.Title>{post?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{post?.body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Dialog;
