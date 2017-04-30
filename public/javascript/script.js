console.log('sanity check');

$(document).ready(function() {
	$("#submit").click(function() {
		//set local storage, manage access
		console.log("clicked");
		populateStorage();
		var selectorlower = $('#selector').val().toLowerCase();
		window.location.replace("./" + selectorlower + ".ejs")
	});


});


function populateStorage() {
	localStorage.setItem('username', $("#username").val());
	localStorage.setItem('password', $("#password").val());
	console.log("storage set");
	console.log('username: ' + localStorage.getItem('username'));
	console.log('password: ' + localStorage.getItem('password'));
}
