import * as types from './projectTypes';
/*
**	Create Project Action
*/
export function createProject(project) {
	return { type: types.CREATE_PROJECT, project}
}