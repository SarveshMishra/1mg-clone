function loginOn() {
	if (document.querySelector(".signup-overlay").style.display == "block") {
		document.querySelector(".signup-overlay").style.display = "none";
	}
	document.querySelector(".login-overlay").style.display = "block";
}

function loginOff() {
	document.querySelector(".login-overlay").style.display = "none";
}

function signupOn() {
	if (document.querySelector(".login-overlay").style.display == "block") {
		document.querySelector(".login-overlay").style.display = "none";
	}
	document.querySelector(".signup-overlay").style.display = "block";
}

function signupOff() {
	document.querySelector(".signup-overlay").style.display = "none";
}



export {loginOn, signupOn, loginOff, signupOff}