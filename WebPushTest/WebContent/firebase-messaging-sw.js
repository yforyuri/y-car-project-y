importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize Firebase
var config = {
	apiKey : "AAAAqhlZRck:APA91bEh8sa5ZvB6V-4vYXnDAocb6e9mrUqKIY9sF0jHN9u3tNwQz3ZF9mchbI5n1drj3KpCRqxV9nbYt2b49bUt_8VOkJHCqY4Q7Ow8u30BRLL7bmAqPptKg8w33B2IjyX_xa6BQfQC",
	authDomain : "https://ycar-rsv.firebaseapp.com/",
	databaseURL : "https://ycar-rsv.firebaseio.com",
	projectId : "ycar-rsv",
	storageBucket : "ycar-rsv.appspot.com",
	messagingSenderId : "730569721289"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {

	const title = "Hello World";
	const options = {
		body : payload.data.status
	};

	return self.registration.showNotification(title, options);
});
