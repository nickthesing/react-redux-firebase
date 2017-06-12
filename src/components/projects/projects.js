import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as projectActions from '../../actions/project.actions';
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
		event.preventDefault(); // prevent form default launch
		this.props.actions.createProject(this.state.project);
		this.setState({project: {name: ''}})
	}

	projectRow(project, index) {
		return <li key={index}><p>{project.name}</p></li>;
	}

	render() {
		return (
			<div className="columns">
				<div className="Projects column is-6 is-offset-3">
					<header className="Projects__header">
						<h2>Projects</h2>
					</header>
					<section className="Projects__subheading">
						<p className="Projects__subheading__subtitle">Add new project</p>
						<form action="/" no-validate>
							<input type="text" placeholder="Project name" ref="input" onChange={this.onChange} value={this.state.project.name} />
							<input type="submit" value="Add" onClick={this.addProject} />
						</form>
					</section>
					<section className="Projects__content">
						<ul className="Projects__List">
							{this.props.projects.map(this.projectRow)}
						</ul>
					</section>
				</div>
			</div>
		);
	}
}

Projects.propTypes = {
	projects: PropTypes.array.isRequired,  
	actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
	return {
		projects: state.projects
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(projectActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);