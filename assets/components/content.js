import React, { Component } from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Inicio from '../telas/inicio';

export default class Content extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Router>
				<Scene key="root"  hideNavBar={true}>
					<Scene key="Inicio" component={Inicio} initial/>
				</Scene>
			</Router>
		);
	}
}
