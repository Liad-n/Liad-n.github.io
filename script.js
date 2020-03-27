 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAuh6kndYOoghVBnDeFvbSGgwSKw4HJutU",
    authDomain: "liad-n.firebaseapp.com",
    databaseURL: "https://liad-n.firebaseio.com",
    projectId: "liad-n",
    storageBucket: "liad-n.appspot.com",
    messagingSenderId: "741742282809",
    appId: "1:741742282809:web:d4fce9ac8b5b83753065e8",
    measurementId: "G-1PM5Z6T8NZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function saveToFirebase(email) {
    var emailObject = {
        email: email
    };
    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}
function success(){
    console.log('success');
}
function error(){
    console.log('error');
}
let email = {
    'name':'liad noam',
    'email-address':'liad@liad.com'
}
saveToFirebase(email);
