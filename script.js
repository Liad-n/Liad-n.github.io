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
<<<<<<< HEAD
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
=======
>>>>>>> c17323cc91dcf503605a8239ba0150a1fe074ec4
saveToFirebase(email);
