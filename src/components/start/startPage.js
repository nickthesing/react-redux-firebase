import React from 'react';
import { Link } from 'react-router';
import Projects from '../projects/projects';

class StartPage extends React.Component {
	render() {
		return (
			<div>
				<div className="Intro columns">
					<div className="column is-6">
						<h1><span className="Logo">/- </span>Projects <span>collective sharing</span></h1>
						<p className="Logo__Sub">Create, share &amp; work together with /- projects</p>
					</div>
					<div className="column is-offset-4 is-2">
						<Link to="about" className="Intro__about">Learn more about projects</Link> 
					</div>		
				</div>

				<Projects />
			</div>	
		)
	}
} 

export default StartPage