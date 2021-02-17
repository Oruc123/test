import React, { useEffect, useState } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchPostsSuccess } from "../redux/actions";
import { IPost, IState } from "../redux/types";

const Header = () => {
  const [query, setQuery] = useState<string>("");
  const posts = useSelector((state: IState) => state.posts);
  const dispatch = useDispatch();
  const handleChane = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.length > 0) {
      const findedPosts = posts.filter((el: IPost) => {
        return el.body.includes(query);
      });

      dispatch(fetchPostsSuccess(findedPosts));
    } else {
      dispatch(fetchPosts());
    }
  }, [query]);
  return (
    <Navbar className="mb-3" bg="light" expand="lg">
      <Navbar.Brand href="#home">React - Redux</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="ml-auto" inline>
          <FormControl
            onChange={handleChane}
            value={query}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
