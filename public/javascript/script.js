console.log('sanity check');

$(document).ready(function() {
	$("#submit").click(function() {
		//set local storage, manage access
		console.log("clicked");
		populateStorage();
		var selectorlower = $('#selector').val();
		if (selectorlower != null) {
			window.location.replace("./" + selectorlower.toLowerCase());
		}
		else
			alert("Select an account type.");
	});


});


function populateStorage() {
	localStorage.setItem('username', $("#username").val());
	localStorage.setItem('password', $("#password").val());
	console.log("storage set");
	console.log('username: ' + localStorage.getItem('username'));
	console.log('password: ' + localStorage.getItem('password'));
}
