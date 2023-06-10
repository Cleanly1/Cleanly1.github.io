import React from 'react';
import Container from '../../components/Container';
import Box from '../../components/Box';
import ProjectsList from '../../components/ProjectsList';
import Socials from '../../components/Socials';
import Quote from '../../components/Quote';

function Home() {
	return (
		<Container>
			<Box>
				<h1>Hello!</h1>
				<h1>My name is Oskar Turesson.</h1>
				<p>I am a web developer with fullstack tendencies</p>
				<Socials
					to="https://github.com/Cleanly1"
					src="assets/images/github.png"
				/>
			</Box>
			<Box>
				<h1>Featured Projects:</h1>
			</Box>
			<ProjectsList featured />
			<Quote />
		</Container>
	);
}

export default Home;
