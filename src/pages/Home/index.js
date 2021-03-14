import React, { useEffect, useState } from "react";
import { fetchFeaturedProjects } from "../../utils/contentful";
import { Container, Quote, Project, Box } from "../../components";

function Home() {
  const [projects, setProjects] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const featuredList = await fetchFeaturedProjects();
      setProjects(featuredList);
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Box>
        <h1>Hello!</h1>
        <h1>My name is Oskar Turesson.</h1>
        <p>I am a web developer with fullstack tendencies</p>
      </Box>
      <Box>
        <h1>Featured Projects:</h1>
      </Box>
      {projects.length > 0 &&
        projects.map((project, i) => {
          return <Project key={i} data={project} />;
        })}
      <Quote />
    </Container>
  );
}

export default Home;
