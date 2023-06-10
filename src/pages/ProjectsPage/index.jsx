import React from 'react';
import Container from '../../components/Container';
import Box from '../../components/Box';
import ProjectsList from '../../components/ProjectsList';

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
