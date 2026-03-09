//your JS code here. If required.

function showData(event) {
	event.preventDefault();

	let first=document.getElementById("firstName").value;
	let last=document.getElementById("LastName").value;
	let phone=document.getElementById("phone").value;
	let email=document.getElementById("email").value;

	alert(
		"First Name: " + first + "Last Name: " + last + "Phone Number: " + phone + "Email ID: " + email
	);
}