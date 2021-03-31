import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAPyQG0N-JWxroYomKsfLrp_vYsSseEXVY",
	authDomain: "whatsapp-2-8a85b.firebaseapp.com",
	projectId: "whatsapp-2-8a85b",
	storageBucket: "whatsapp-2-8a85b.appspot.com",
	messagingSenderId: "354423175334",
	appId: "1:354423175334:web:5750268119292a7e385c67",
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
