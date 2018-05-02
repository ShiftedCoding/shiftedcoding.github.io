function login() {
    var config = {
      apiKey: "AIzaSyBf3P8gXOJG-msYlyZHbKssXuRUv5ykeGY",
      authDomain: "shiftedmc-forums.firebaseapp.com",
      databaseURL: "https://shiftedmc-forums.firebaseio.com",
      projectId: "shiftedmc-forums",
      storageBucket: "shiftedmc-forums.appspot.com",
      messagingSenderId: "660353953720"
    };
    firebase.initializeApp(config);
    firebase.auth().signInWithEmailAndPassword(document.getElementById("email").value, document.getElementById("password").value).catch(function(error) {
        console.log("Error code " + error.code + ": " + error.message);
    });
}