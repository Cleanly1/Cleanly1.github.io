import React, { useEffect, useState } from 'react';
import { fetchPageBySlug, richTextToReact } from '../../utils/contentful';
import Container from '../../components/Container';
import Box from '../../components/Box';

function About() {
	const [info, setInfo] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			const data = await fetchPageBySlug('about-me');
			setInfo(data.items[0].fields);
			setLoading(false);
		};
		getData();
	}, []);
	console.log(info);

	if (loading) {
		return (
			<Container>
				<Box>Loading....</Box>
			</Container>
		);
	}

	return (
		<Container>
			<Box>
				<h1>About me</h1>
				<h3>{info.headerTitle}</h3>
			</Box>
			{info.firstSection !== undefined && (
				<Box>{richTextToReact(info.firstSection)}</Box>
			)}
			{info.secondSection !== undefined && (
				<Box>{richTextToReact(info.firstSection)}</Box>
			)}
		</Container>
	);
}

export default About;
