import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as thunk from 'redux-thunk';
import reducers from './reducers';

import Routes from './routes';

const store = createStore(reducers, applyMiddleware(thunk.default));

injectGlobal`
    body {
        background-color: #ECEFF1;
    }
`;

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Routes} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	rootElement
);
