import * as firebase from 'firebase';

/**
 * Firebase configuration
 * Note: REACT_APP prefix is required for react to pick up the env var
 *
 * @type {{
 *    apiKey: string,
 *    authDomain: string,
 *    databaseURL: string,
 *    projectId: string,
 *    storageBucket: string,
 *    messagingSenderId: string
 * }}
 */
var config = {
	apiKey : process.env.REACT_APP_STAT_TRKR_API_KEY,
	authDomain : process.env.REACT_APP_STAT_TRKR_AUTH_DOMAIN,
	databaseURL : process.env.REACT_APP_STAT_TRKR_DATABASE_URL,
	projectId : process.env.REACT_APP_PROJECT_ID,
	storageBucket : process.env.REACT_APP_STAT_TRKR_STORAGE_BUCKET,
	messagingSenderId : process.env.REACT_APP_STAT_TRKR_MESSAGING_SEND_ID
};

firebase.initializeApp( config );

const txtEmail = document.getElementById( 'email' );
const txtPassword = document.getElementById( 'password' );
const btnLogin = document.getElementById( 'btnLogin' );
const btnSignUp = document.getElementById( 'btnSignUp' );
const btnLogout = document.getElementById( 'btnLogout' );

// Login
btnLogin.addEventListener( 'click', e => {
	const email = txtEmail.value;
	const password = txtPassword.value;
	const auth = firebase.auth();

	const promise = auth.signInWithEmailAndPassword( email, password );
	promise
		.catch( e => console.log( e.message ) );
} );

// Sign up
btnSignUp.addEventListener( 'click', e => {
	const email = txtEmail.value;
	const password = txtPassword.value;
	const auth = firebase.auth();

	const promise = auth.createUserWithEmailAndPassword( email, password );
	promise
		.catch( e => console.log( e.message ) );
} );

// Logout
btnLogout.addEventListener( 'click', e => {
	firebase.auth().signOut();
} );

// Watch Auth State
firebase.auth().onAuthStateChanged( firebaseUser => {
	if ( firebaseUser ) {
		console.log( firebaseUser );
		btnLogout.classList.remove( 'hide' );
	} else {
		console.log( 'not logged in' );
		btnLogout.classList.add( 'hide' );
	}
} );
