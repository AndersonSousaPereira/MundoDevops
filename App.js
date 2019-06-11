import React, { Component } from 'react';
import { StyleSheet,View, ScrollView} from 'react-native';
import Content from './assets/components/content';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.root}>
			<Content></Content>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	root:{
		flex:1
	}
});
