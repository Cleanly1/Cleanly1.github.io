import React, { useEffect, useState } from "react";
import { fetchEntriesByType, fetchFeaturedProjects } from "../../utils/contentful";
import { Project, Box } from "../../components";

function ProjectsList(props) {
  const [projects, setProjects] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const projectList = props.featured !== undefined ? await fetchFeaturedProjects() : await fetchEntriesByType("project");
      setProjects(projectList);
    };
    fetchData();
  }, [props.featured]);
  return (
    <>
      {projects.length > 0 &&
        projects.map((project, i) => {
          return <Project key={i} data={project} />;
        })}
        {!projects.length ?
        (<Box>
          <h1>Loading projects...</h1>
        </Box>) :
        <></>
        }
    </>
  );
}

export default ProjectsList;
