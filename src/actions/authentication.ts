import axios from 'axios';
import { AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE } from './ActionTypes';
import { Dispatch } from 'react-redux';

/* LOGIN */
export const loginRequest = (username: string, password: string) => {
	return (dispatch: Dispatch) => {
		// Login Start
		dispatch(login());

		// API REQUEST
		return axios
			.post('/api/account/signin', { username, password })
			.then((response) => {
				// SUCCEED
				dispatch(loginSuccess(username));
			})
			.catch((error) => {
				// FAILED
				dispatch(loginFailure());
			});
	};
};

export const login = () => {
	return {
		type: AUTH_LOGIN
	};
};
export const loginSuccess = (username: string) => {
	return {
		type: AUTH_LOGIN_SUCCESS,
		username
	};
};
export const loginFailure = () => {
	return {
		type: AUTH_LOGIN_FAILURE
	};
};
