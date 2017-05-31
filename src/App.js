import React, {Component} from 'react';
import './App.css';
import * as firebase from 'firebase';

export default class App extends Component {

	constructor() {
		super();
		this.state = {
			speed : 100
		};
	}

	componentDidMount() {
		const rootRef = firebase.database().ref().child( 'react' );
		const speedRef = rootRef.child( 'speed' );
		speedRef.on( 'value', snap => {
			this.setState( {
				speed : snap.val()
			} );
		} );
	}

	render() {
		return (
			<div className="App">
				<h1>{ this.state.speed }</h1>
			</div>
		);
	}
}
