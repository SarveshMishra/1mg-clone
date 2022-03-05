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
