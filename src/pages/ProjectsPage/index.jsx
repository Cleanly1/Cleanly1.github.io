import React from "react";
import { Container, Box, ProjectsList } from "../../components";

function ProjectsPage() {
  return (
    <Container>
      <Box>
        <h1>All Projects:</h1>
      </Box>
      <ProjectsList />
    </Container>
  );
}

export default ProjectsPage;
