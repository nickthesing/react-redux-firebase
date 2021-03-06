import * as types from '../actions/projectTypes';

export default function projectReducer(state = [], action){
	switch(action.type) {
		case types.CREATE_PROJECT:
			return [...state,
				Object.assign({}, action.project)
			];
		default: 
			return state;
	}
}