import React, { useEffect, useState } from "react";
import { fetchEntriesByType } from "../../utils/contentful";
import { Container, Project, Box } from "../../components";

function ProjectsPage() {
  const [projects, setProjects] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const projectList = await fetchEntriesByType("project");
      setProjects(projectList);
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Box>
        <h1>All Projects:</h1>
      </Box>
      {projects.length > 0 &&
        projects.map((project, i) => {
          return <Project key={i} data={project} />;
        })}
    </Container>
  );
}

export default ProjectsPage;
