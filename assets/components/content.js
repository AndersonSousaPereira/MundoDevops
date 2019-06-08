import React, { Component } from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Login from '../telas/login';

export default class Content extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Router>
				<Scene key="root"  hideNavBar={true}>
					<Scene key="Login" component={Login} initial/>
				</Scene>
			</Router>
		);
	}
}
