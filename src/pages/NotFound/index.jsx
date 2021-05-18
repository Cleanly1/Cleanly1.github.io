import React from "react";
import { Container, NavButton, Box } from "../../components";

function NotFound() {
  return (
    <Container>
      <Box>
        <h1>Seems like you are a bit lost??</h1>
        <NavButton to="/" label="Home">
          Return to the light
        </NavButton>
      </Box>
    </Container>
  );
}

export default NotFound;
