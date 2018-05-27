import * as React from 'react';

import { Link } from 'react-router-dom';

class Register extends React.Component {
	state = {
		username: '',
		password: ''
	};
	_inputChange = (e: React.FormEvent<HTMLInputElement>) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
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
								value={username}
								className="validate"
								onChange={this._inputChange}
							/>
						</div>
						<div className="input-field col s12">
							<label>Password</label>
							<input
								name="password"
								type="password"
								value={password}
								onChange={this._inputChange}
								className="validate"
							/>
						</div>
						<a className="waves-effect waves-light btn">REGISTER</a>
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

export default Register;
