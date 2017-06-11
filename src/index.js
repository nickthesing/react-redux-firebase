import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import '../node_modules/bulma/bulma.sass';
import './styles/styles.sass';

render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('app')
)