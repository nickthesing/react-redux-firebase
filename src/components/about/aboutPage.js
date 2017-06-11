import React from 'react';
import { Link } from 'react-router';
import './about.sass';

class AboutPage extends React.Component {

	render() {
		return (
			<div className="About columns">
				<div className="column is-4 is-offset-4">
					<h2>Want to know more about /- projects?</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat laboriosam, expedita facere ab praesentium doloribus magni numquam impedit, quia dolores porro quis excepturi. Quibusdam labore rem nemo similique! Illum laborum dicta velit esse, consequuntur saepe placeat enim quisquam necessitatibus.</p>
					<br />
					<Link to="/" >Go back to start!</Link>
				</div>
			</div>
		);
	}
}

export default AboutPage