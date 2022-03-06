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
document.querySelector(".footer").innerHTML = await footer();
document.querySelector(".header-sec-1> ul").innerHTML = "";
document.querySelector(".header-right-part").innerHTML = "";
document.querySelector(".login-overlay").innerHTML = await login();
document.querySelector(".signup-overlay").innerHTML = await signup();
changeLinkColor();
window.loginOn = loginOn;
window.signupOn = signupOn;
window.loginOff = loginOff;
window.signupOff = signupOff;

// Display Cart Item and checkout

let cart_item = JSON.parse(localStorage.getItem("cart"));
if (cart_item != null) {
	display(cart_item);
	formDisplay();
} else {
	let empty_cart = document.querySelector(".empty-cart");
	let img = document.createElement("img");
	img.src = "./image/empty-cart.gif";
	empty_cart.append(img);
}

function display(cart_item) {
	console.log(cart_item);

	if (cart_item.length == 0) {
		let empty_cart = document.querySelector(".empty-cart");
		let img = document.createElement("img");
		img.src = "./image/empty-cart.gif";
		empty_cart.append(img);
		document.querySelector(".cart-display").innerHTML = "";

		formDisplay();
		return;
	}
	let cart_container = document.querySelector(".cart-display");
	cart_container.innerHTML = "";

	cart_item.forEach((ele) => {
		let item = document.createElement("div");
		item.className = "item";
		let item_heading = document.createElement("div");
		item_heading.className = "itemHeading";
		let h4 = document.createElement("h4");
		h4.textContent = ele.title;
		let safe_logo = document.createElement("div");
		safe_logo.className = "safe-logo";
		let safe_logo_img = document.createElement("img");
		safe_logo_img.src =
			"https://img.icons8.com/fluency-systems-regular/344/hospital.png";
		let safe_logo_text = document.createElement("p");
		safe_logo_text.textContent = "SAFE";
		safe_logo.append(safe_logo_img, safe_logo_text);
		item_heading.append(h4, safe_logo);

		let test_includes = document.createElement("div");
		test_includes.className = "testIncludes";
		test_includes.textContent = "Includes " + ele.testInclude + " tests";

		let tata_logo = document.createElement("div");
		tata_logo.className = "tataLogo";
		let tata_logo_img = document.createElement("img");
		tata_logo_img.src =
			"https://onemg.gumlet.io/diagnostics/13745198-de27-11eb-b6a9-028c4b29e266.png?format=auto";

		let rating = document.createElement("div");
		rating.className = "rating";
		let ratings = document.createElement("span");
		ratings.textContent = ele.rating;
		let star_img = document.createElement("img");
		star_img.src = "./image/star.png";
		rating.append(ratings, star_img);

		let iso = document.createElement("p");
		iso.textContent = "ISO";
		tata_logo.append(tata_logo_img, rating, iso);

		let item_price = document.createElement("div");
		item_price.className = "itemPrice";

		let price = document.createElement("p");
		price.className = "price";
		price.textContent = "₹" + ele.price;

		let actual_price = document.createElement("p");
		actual_price.className = "actualPrice";
		let actual_price_strike = document.createElement("strike");
		actual_price_strike.textContent = " " + "₹" + ele.actualPrice;
		actual_price.append(actual_price_strike);

		let discount = document.createElement("div");
		discount.className = "discount";
		discount.textContent = ele.discount + "% off";
		item_price.append(price, actual_price, discount);

		let delete_btn = document.createElement("button");
		delete_btn.innerHTML = `Delete Item`;
		delete_btn.addEventListener("click", function () {
			removeItem(ele.title);
		});
		item.append(item_heading, test_includes, tata_logo, item_price, delete_btn);
		cart_container.append(item);
	});
}

function formDisplay() {
	if (cart_item.length == 0) {
		document.querySelector(".address-form ").style.display = "none";
		return;
	}
	let form = document.querySelector(".address-form ");

	form.style.display = "block";
	let btn = document.querySelector(".checkout-btn");
	btn.addEventListener("click", function (e) {
		let cart_count = JSON.parse(localStorage.getItem("cart-count"));
		let cart = JSON.parse(localStorage.getItem("cart"));
		cart_count = 0;
		cart = [];
		localStorage.setItem("cart-count", JSON.stringify(cart_count));
		localStorage.setItem("cart", JSON.stringify(cart));
		location.href = "./payment.html";
	});
}

function removeItem(title) {
	let cart = JSON.parse(localStorage.getItem("cart"));
	let cart_count = JSON.parse(localStorage.getItem("cart-count"));
	cart.forEach(function (ele) {
		if (title == ele.title) {
			cart.splice(ele, 1);
			cart_count--;
		}
	});
	localStorage.setItem("cart-count", JSON.stringify(cart_count));
	localStorage.setItem("cart", JSON.stringify(cart));
	cart_item = JSON.parse(localStorage.getItem("cart"));
	display(cart_item);
}
