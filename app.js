window.onload = () => {
    init();
}

const init = () => {
    var firebaseRef = firebase.database().ref('User');
    firebaseRef.once('value').then(snapshot => {
        console.log('====================================');
        console.log(snapshot.val());
        console.log('====================================');
    })
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