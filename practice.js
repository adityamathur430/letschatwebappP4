var firebaseConfig = {
    apiKey: "AIzaSyARcP5ZURy6Q1lfOSgrAF2Kv9lwAn3wY0M",
    authDomain: "class-test-b172a.firebaseapp.com",
    databaseURL:"https://class-test-b172a-default-rtdb.firebaseio.com/",
    projectId: "class-test-b172a",
    storageBucket: "class-test-b172a.appspot.com",
    messagingSenderId: "273937489754",
    appId: "1:273937489754:web:eb23bc8ee1e19bd13f1d63"
  };
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}