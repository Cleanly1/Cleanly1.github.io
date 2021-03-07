import React from "react";
import { Container, NavButton } from "../../components";

function NotFound() {
  return (
    <Container>
      <h1>Seems like you are a bit lost??</h1>
      <NavButton to="/">Return to the light</NavButton>
    </Container>
  );
}

export default NotFound;
