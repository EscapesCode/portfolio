import React from 'react';
import Title from './Title';
// import Button from './Button';
const Projects = () => {
	return (
		<div className="container mx-auto w-10/12 pt-16" id='Projects'>
			<div className="Projects flex flex-col min-h-screen ">
				<Title primary={"My"} secondary={"Projects"}/>
			</div>
		</div>
	);
}

export default Projects;
