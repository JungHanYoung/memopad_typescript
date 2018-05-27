import * as React from 'react';
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';

import Header from '../components/Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';

interface IProps extends RouteComponentProps<any> {}

class Routes extends React.Component<IProps> {
	render() {
		let re = /(login|register)/;
		let isAuth = re.test(this.props.location.pathname);
		return (
			<div>
				{isAuth ? undefined : <Header />}
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
				</Switch>
			</div>
		);
	}
}

export default Routes;
