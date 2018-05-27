import * as React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.scss';

interface IProps {
	isLoggedIn?: boolean;
}

class Header extends React.Component<IProps> {
	static defaultProps: Partial<IProps> = {
		isLoggedIn: false
	};
	render() {
		return (
			<nav color="primary">
				<div className="nav-wrapper teal lighten-2">
					<Link to="/" className="brand-logo center">
						MEMOPAD
					</Link>
					<ul>
						<li>
							<a>
								<i className="material-icons">search</i>
							</a>
						</li>
					</ul>

					<ul className="right">
						{this.props.isLoggedIn ? (
							<li>
								<a>
									<i className="material-icons">lock_open</i>
								</a>
							</li>
						) : (
							<li>
								<Link to="/login">
									<i className="material-icons">vpn_key</i>
								</Link>
							</li>
						)}
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
