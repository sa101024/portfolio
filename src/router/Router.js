import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import AboutPage from '../components/AboutPage';
import SkillsPage from '../components/SkillsPage';
import WorksPage from '../components/WorksPage';
import NotFound from '../components/NotFound';
import Footer from '../components/Footer';

const Router = () => {
	return(
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path="/" component={AboutPage} exact={true} />
					<Route path="/skills" component={SkillsPage} />
					<Route path="/works" component={WorksPage} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default Router;
