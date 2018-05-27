import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import '../css/Login.scss';

import { loginRequest } from '../actions/authentication';

interface IMapStateToProps {
	status: string;
}

interface IMapDispatchToProps {
	loginRequest: (id: string, pw: string) => Promise<void>;
}

interface OwnProps {}

type Props = IMapStateToProps & IMapDispatchToProps & OwnProps;

interface State {
	username: string;
	password: string;
	[x: string]: string;
}

class Login extends React.Component<Props, State> {
	static defaultProps = {
		loginRequest: (id: string, pw: string) => console.log('id :', id, ', pw :', pw)
	};
	state: State = {
		username: '',
		password: ''
	};
	_inputChange = (e: React.FormEvent<HTMLInputElement>) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	};
	_handleLogin = () => {
		const { username, password } = this.state;
		return this.props.loginRequest(username, password).then(() => {
			if (this.props.status === 'SUCCESS') {
				// create session data
				let loginData = {
					isLoggedIn: true,
					username
				};

				document.cookie = 'key=' + btoa(JSON.stringify(loginData));

				toast('Welcome, ' + username + '!', {
					autoClose: 2000
				});
				return true;
			} else {
				toast.error('Incorrect username or password', {
					autoClose: 2000
				});
				return false;
			}
		});
	};
	render() {
		const { username, password } = this.state;
		return (
			<div className="container auth">
				<Link className="logo" to="/">
					MEMOPAD
				</Link>
				<div className="card-content">
					<div className="row">
						<div className="input-field col s12 username">
							<label>Username</label>
							<input
								name="username"
								type="text"
								onChange={this._inputChange}
								value={username}
								className="validate"
							/>
						</div>
						<div className="input-field col s12">
							<label>Password</label>
							<input
								name="password"
								type="password"
								onChange={this._inputChange}
								value={password}
								className="validate"
							/>
						</div>
						<a className="waves-effect waves-light btn" onClick={this._handleLogin}>
							LOGIN
						</a>
					</div>
				</div>

				<div className="footer">
					<div className="card-content">
						<div className="right">
							New Here? <Link to="/register">Create an account</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		status: state.authentication.login.status
	};
};

const mapDispatchToProps = (dispatch: Dispatch<any, any>) => {
	return {
		loginRequest: (id: string, pw: string) => {
			return dispatch(loginRequest(id, pw));
		}
	};
};

export default connect<IMapStateToProps, IMapDispatchToProps, OwnProps>(mapStateToProps, mapDispatchToProps)<any>(
	Login
);
