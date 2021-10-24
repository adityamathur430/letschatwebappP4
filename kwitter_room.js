const firebaseConfig = {
      apiKey: "AIzaSyARcP5ZURy6Q1lfOSgrAF2Kv9lwAn3wY0M",
      authDomain: "class-test-b172a.firebaseapp.com",
      databaseURL:"https://class-test-b172a-default-rtdb.firebaseio.com/",
      projectId: "class-test-b172a",
      storageBucket: "class-test-b172a.appspot.com",
      messagingSenderId: "273937489754",
      appId: "1:273937489754:web:eb23bc8ee1e19bd13f1d63"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
)}
      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
      }
      //End code
    
      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
                  window.location = "kwitter.html";
      }
getData())})};
