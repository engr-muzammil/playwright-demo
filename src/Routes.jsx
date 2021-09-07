import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Components/Home';
import Login from './pages/Login/Components/SignInSide';
import Contact from './pages/Contact/Components/Contact';


class Routes extends Component {
render() {
	return (
	<Router>
			<Switch>
			<Route exact path='/' component={Home}></Route>
			<Route exact path='/Login' component={Login}></Route>
			<Route exact path='/contact' component={Contact}></Route>
			</Switch>
	</Router>
);
}
}

export default Routes;
