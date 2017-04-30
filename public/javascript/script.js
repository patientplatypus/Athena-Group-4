$(document).ready(function() {
	$("#submit").click(function() {
		//set local storage, manage access
		console.log("clicked");
		populateStorage();
		window.location.replace("./" + $("#selector").value + ".ejs")
	});


});


function populateStorage() {
	localStorage.setItem('username', $("#username").value);
	localStorage.setItem('password', $("#password").value);
	console.log("storage set");
	console.log('username: ' + localStorage.getItem('username'));
	console.log('password: ' + localStorage.getItem('password'));
}
