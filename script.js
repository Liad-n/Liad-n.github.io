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
