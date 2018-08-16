window.onload = () => {
    init();
}

const init = () => {
    var firebaseRef = firebase.database().ref('User').orderByChild("address");
    firebaseRef.once('value').then(snapshot => {
        snapshot.forEach(child => {
            var childKey = child.key;
            var childValue = child.val();
            console.log(childValue);
        });
    });
}

const onSave = () => {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var address = document.querySelector("#address").value;
    
    saveToFirebase(email, password, address);
}

const saveToFirebase = (email, password, address) => {
    var firebaseRef = firebase.database().ref('User');
    firebaseRef.push({ email, password, address});

    init();
}

const onDelete = () => {
    var firebaseRef = firebase.database().ref('User/User2');
    firebaseRef.remove()
        .then(() => console.log("Remove success"))
        .catch(err => console.log("Remove fail: " + err.message));
}

const onUpdate = () => {
    var firebaseRef = firebase.database().ref('User/User1');
    firebaseRef.update({
        address: '1111',
        email: '11111@gmail.com',
        password: 11111
    })
    .then(() => console.log("Update success"))
    .catch(err => console.log("Update fail: " + err.message));

}