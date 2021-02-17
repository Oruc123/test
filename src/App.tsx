import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { Container } from "react-bootstrap";
import Header from "./components/Header";

const App = () => {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
};

export default App;
