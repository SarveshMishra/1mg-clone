import { topHeader, searchBox } from "../components/header/navbar.js";
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
window.loginOn = loginOn;
window.signupOn = signupOn;
window.loginOff = loginOff;
window.signupOff = signupOff;
window.hide = hide;
changeLinkColor();
document.getElementById("location").addEventListener("click", showList);

function hide() {
	let container = document.querySelector(".location-selection ");
	document.addEventListener("mouseup", function (e) {
		if (!container.contains(e.target)) {
			container.style.visibility = "hidden";
		}
	});
}

// Body section

// Footer section

// Footer section
document.querySelector(".footer").innerHTML = await footer();
