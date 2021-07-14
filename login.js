function addUser()
{}
user_name = document.getElementById("user_name").value
Storage.setItem("user_name", user_name);
window.location = "Kwitter_room.html";
}