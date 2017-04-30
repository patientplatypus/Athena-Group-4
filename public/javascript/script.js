$(document).ready(function() {
	$("#submit").on('click',function() {
		//set local storage, manage access
		populateStorage();
		window.location.replace("./" + $("#selector").value + ".ejs")
	});


});


function populateStorage() {
	localStorage.setItem('username', $("#username").value);
	localStorage.setItem('password', $("#password").value);
}
