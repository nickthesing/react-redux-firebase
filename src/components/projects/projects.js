import React from 'react';
import './projects.sass';

class Projects extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			project: {name: ''}
		}

		this.addProject = this.addProject.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		const project = this.state.project;
		project.name = event.target.value;
		this.setState({project: project});
	}

	addProject(event) {
		event.preventDefault();
	}

	render() {
		return (
			<div className="columns">
				<div className="Projects column is-4 is-offset-4">
					<header className="Projects__header">
						<h2>Projects</h2>
					</header>
					<section className="Projects__subheading">
						<form action="/" no-validate>
							<input type="text" placeholder="Project name" onChange={this.onChange} value={this.state.project.name} />
							<input type="submit" value="Add" onClick={this.addProject} />
						</form>
					</section>
					<content>
						
					</content>
				</div>
			</div>
		);
	}
}

export default Projects