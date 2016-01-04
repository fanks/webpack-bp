require("bootstrap-sass/assets/stylesheets/_bootstrap.scss");
require('./scss/screen.scss');

import React from 'react';
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

var routes = (
	<Router history={browserHistory}>
		<Route path="/">
			<IndexRoute component={require('page1')} />
			<Route path="page2" component={require('page2')} />
		</Route>
	</Router>
);

render(routes, document.getElementById('app'));