import React from 'react';
import Container from '../../components/Container';
import Box from '../../components/Box';
import NavButton from '../../components/NavButton';

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
