var firebaseConfig = {
  apiKey: "AIzaSyA50YQg3JKcVTZvZCpFxHRTfdv9eX-doQc",
  authDomain: "kwitter-f1575.firebaseapp.com",
  databaseURL: "https://kwitter-f1575-default-rtdb.firebaseio.com",
  projectId: "kwitter-f1575",
  storageBucket: "kwitter-f1575.appspot.com",
  messagingSenderId: "954865919334",
  appId: "1:954865919334:web:68eda0d06b45ebb22d54a7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  });
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "index.html";
}
