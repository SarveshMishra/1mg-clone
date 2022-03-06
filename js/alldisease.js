import { topHeader, searchBox, links } from "../components/header/navbar.js";
import showList from "../components/header/index.js";
import changeLinkColor from "../scripts/changeLinkColor.js";
import footer from "../components/footer/footer.js";
import { login, signup } from "../components/login/login.js";
import {
	loginOn,
	signupOn,
	loginOff,
	signupOff,
} from "../scripts/loginSignup.js";
// Navbar Import section
document.querySelector(".header-sec-1").innerHTML = await topHeader();
document.querySelector(".search-box").innerHTML = await searchBox();
document.querySelector(".login-overlay").innerHTML = await login();
document.querySelector(".signup-overlay").innerHTML = await signup();
changeLinkColor();
window.hide = hide;
window.loginOn = loginOn;
window.signupOn = signupOn;
window.loginOff = loginOff;
window.signupOff = signupOff;
document.getElementById("location").addEventListener("click", showList);
function hide() {
	let container = document.querySelector(".location-selection ");
	document.addEventListener("mouseup", function (e) {
		if (!container.contains(e.target)) {
			container.style.visibility = "hidden";
		}
	});
}
let username = localStorage.getItem("username");
if (username == null) {
	username = "";
}
// Login Part
let login_area = document.querySelector(".login");
updateLoginArea();

let login_btn = document.querySelector(".login-btn");
login_btn.addEventListener("click", loginUser);
function loginUser() {
	let login_usernames = document.querySelector("#login-username").value;
	let username = localStorage.getItem("username");
	if (login_usernames == username) {
		alert("Login Done");
		let flag = localStorage.getItem("isUserLogin");
		flag = true;
		localStorage.setItem("isUserLogin", JSON.stringify(flag));

		loginOff();
		login_area.innerHTML = `<span><img style="width: 20px" src="../image/user.svg" alt=""></span> <span id="logout">LogOut</span>`;
		location.reload();
	} else {
		alert("Invalid Email Please Sign up first!!");
		loginOff();
		signupOn();
	}
}

let signup_btn = document.querySelector("#signup-btn");
signup_btn.addEventListener("click", signupUser);
function signupUser() {
	let signup_usernames = document.querySelector("#signup-email").value;
	localStorage.setItem("username", signup_usernames);
	alert("Signup Done. Please Login");
	signupOff();
}

function updateLoginArea() {
	// console.log();
	let flag = localStorage.getItem("isUserLogin");
	console.log(flag);
	if (flag == "false") {
		login_area.innerHTML = `<span onclick="loginOn()">Login</span> | <span onclick="signupOn()">Sign Up</span>`;
	} else if (flag == "true") {
		login_area.innerHTML = `<span><img style="width: 20px" src="../image/user.svg" alt=""></span> <span id="logout">LogOut</span>`;
		document.getElementById("logout").addEventListener("click", logoutUser);
	}
}

function logoutUser() {
	login_area.innerHTML = `<span onclick="loginOn()">Login</span> | <span onclick="signupOn()">Sign Up</span>`;
	let flag = localStorage.getItem("isUserLogin");
	flag = "false";
	localStorage.setItem("isUserLogin", flag);
}
// CArt Section
update_cart_count();
function update_cart_count() {
	if (localStorage.getItem("cart-count") == null) {
		document.getElementById("cart_count").innerHTML = ` 0 Item`;
	} else {
		let cart_count = localStorage.getItem("cart-count");
		console.log(cart_count);
		document.getElementById("cart_count").innerHTML = `${cart_count} Item`;
		document.getElementById("cart-icon").innerHTML = `${cart_count}`;
	}
}
document.querySelector(".footer").innerHTML = await footer();
