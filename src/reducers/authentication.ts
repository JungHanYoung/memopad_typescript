import * as types from '../actions/ActionTypes';

interface IAction {
	type: string;
	[key: string]: any;
}

const initialState = {
	login: {
		status: 'INIT'
	},
	status: {
		isLoggedIn: false,
		currentUser: ''
	}
};

export default function authentication(state = initialState, action: IAction) {
	switch (action.type) {
		/* LOGIN */
		case types.AUTH_LOGIN:
			state = {
				...state,
				login: {
					...state.login,
					status: 'WAITING'
				}
			};
			return state;
		case types.AUTH_LOGIN_SUCCESS:
			state = {
				...state,
				login: {
					...state.login,
					status: 'SUCCESS'
				},
				status: {
					...state.status,
					isLoggedIn: true,
					currentUser: action.username
				}
			};
			return state;
		case types.AUTH_LOGIN_FAILURE:
			state = {
				...state,
				login: {
					...state.login,
					status: 'FAILURE'
				}
			};
			return state;
		default:
			return state;
	}
}
