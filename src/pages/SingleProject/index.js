import React, { useEffect, useState } from "react";
import { fetchProjectsByID } from "../../utils/contentful";
import { Container, Box } from "../../components";

function SingleProject(props) {
  const [project, setProject] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const projectList = await fetchProjectsByID(props.id);
      setProject(projectList);
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Box>
        <h1>The Project</h1>
      </Box>
      {project && (
        <div>
          <h1>Hello</h1>
        </div>
      )}
    </Container>
  );
}

export default SingleProject;
