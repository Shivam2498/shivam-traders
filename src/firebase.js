import firebase from 'firebase';

const firebaseConfig = {
	apiKey            : 'AIzaSyD1EtUEUQIkfYQd8-Djy3FC_Nofi4sSvz4',
	authDomain        : 'shivam-traders-11934.firebaseapp.com',
	databaseURL       : 'https://shivam-traders-11934.firebaseio.com',
	projectId         : 'shivam-traders-11934',
	storageBucket     : 'shivam-traders-11934.appspot.com',
	messagingSenderId : '371877117827',
	appId             : '1:371877117827:web:518b93f2683a7fb0b140b6',
	measurementId     : 'G-KEH1D78212'
};

firebase.initializeApp(firebaseConfig);
export default firebase;
