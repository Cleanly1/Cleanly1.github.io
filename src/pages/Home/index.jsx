import React from "react";
import { Container, Quote, Box, ProjectsList, Socials } from "../../components";

function Home() {
  return (
    <Container>
      <Box>
        <h1>Hello!</h1>
        <h1>My name is Oskar Turesson.</h1>
        <p>I am a web developer with fullstack tendencies</p>
        <Socials to="https://github.com/Cleanly1" src="assets/images/github.png"/>
      </Box>
      <Box>
        <h1>Featured Projects:</h1>
      </Box>
      <ProjectsList featured/>
      <Quote />
    </Container>
  );
}

export default Home;
