import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import StartPage from './components/start/startPage';
import AboutPage from './components/about/aboutPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={StartPage} />
		<Route path="about" component={AboutPage} />
	</Route>
);