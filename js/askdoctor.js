import { topHeader } from "../components/header/navbar.js";
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
document.querySelector(".login-overlay").innerHTML = await login();
document.querySelector(".signup-overlay").innerHTML = await signup();
window.loginOn = loginOn;
window.signupOn = signupOn;
window.loginOff = loginOff;
window.signupOff = signupOff;
// Body section
changeLinkColor();
// var slideI=1;
// var prev=document.querySelectorAll('.prev');

// prev[0].addEventListener('click',function(){
// 	viewSlide(slideI +=(-1));
// });
// var next=document.querySelectorAll(".next");

// next[0].addEventListener('click',function(){
// 	viewSlide(slideI +=(-1));
// });

// let alldots=document.querySelectorAll(".dot");
// let i=1;
// alldots.forEach(function(ele){
// 	ele.addEventListener('click',function(){
// 		viewSlide(slideI=i);
// 	});
// 	i++;
// });

// function cSlide(n){
// 	viewSlide(slideI=n);
// }

// function viewSlide(n){
// 	var slides = document.getElementsByClassName("h-customer-slide");
// 	var dots = document.getElementsByClassName("dot");
// 	if(n>slides.length){
// 		slideI=1;
// 	}
// 	if(n<1){
// 		slideI=slides.length;
// 	}
// 	for(let i=0;i<slides.length;i++){
// 		slides[i].style.display="none";
// 		dots[i].className = dots[i].className.replace("dot-active", "");
		
// 	}
// 	slides[slideI-1].style.display = "block";  
//   	dots[slideI-1].className += "dot-active";
// }



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
var slides = document.getElementsByClassName("h-customer-slide");
var dots = document.getElementsByClassName("dot");
var prevDot = "";
var prevSlide = "";
for (let i = 0; i < dots.length; i++) {
	console.log(dots[i].className);
	dots[i].addEventListener("click", function () {
		if (
			prevDot.className == "dot dot-active" &&
			prevSlide.style.display == "block"
		) {
			prevDot.className = prevDot.className.replace("dot-active", "");
			prevSlide.style.display = "none";
		}
		dots[i].className = "dot dot-active";
		slides[i].style.display = "block";
		prevSlide = slides[i];
		prevDot = dots[i];
	});
}

// Footer section
document.querySelector(".footer").innerHTML = await footer();
