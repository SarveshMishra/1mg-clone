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
document.querySelector(".links-box").innerHTML = await links();
document.querySelector(".login-overlay").innerHTML = await login();
document.querySelector(".signup-overlay").innerHTML = await signup();
changeLinkColor();
window.hide = hide;
window.loginOn = loginOn;
window.signupOn = signupOn;
window.loginOff = loginOff;
window.signupOff = signupOff;
window.updateCity = updateCity;
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

function updateCity(city) {
	console.log(city);
	document.querySelector("#location").value = city;
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
// Database Section
importDB();
async function importDB() {
	let DB = await (await fetch("../json/database.json")).json();
	healthCheckup(DB.data);
	featureBrands(DB.FeatureBrand);
	topSeller(DB.topSeller);
	tataProduct(DB.topSeller);
	multiVitamin(DB.topSeller);
	trending(DB.topSeller);
	explore(DB.topSeller);
	popularCategory(DB.FeatureBrand);
	healthConcern(DB.shopByHealthConcerns);
	pathologyTest(DB.data);
	radiologyTest(DB.data);
}

//Full Body Health Checkups
var exportdata = "";
function healthCheckup(data) {
	var slider = document.querySelector("#full-body-health-checkup");
	data.forEach(function (ele) {
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

		item.addEventListener("click", function () {
			localStorage.setItem("order_details", JSON.stringify(ele));
			window.open("./packagedetails.html", "_blank");
		});

		item.append(item_heading, test_includes, tata_logo, item_price);
		slider.append(item);
	});

	// let right_arrow = document.getElementById("rightArrow");
	window.healthSlideR = slideRight;
	window.healthSlideL = slideLeft;
	function slideRight() {
		let left_arrow = document.querySelectorAll(".leftArrow")[0];
		slider.scrollLeft += 1200;
		left_arrow.style.display = "block";
	}

	function slideLeft() {
		slider.scrollLeft -= 1200;
		// right_arrow.style.display = "block";
	}
}

// Features brands

function featureBrands(data) {
	let slider = document.getElementById("featured-brands");

	data.forEach((ele) => {
		let brand_item = document.createElement("div");
		brand_item.className = "brand-item";
		let image = document.createElement("img");
		image.src = `${ele.image}`;

		let name = document.createElement("p");
		name.innerHTML = `${ele.title}`;

		brand_item.append(image, name);
		slider.append(brand_item);
	});
	window.brandsSlideR = slideRight;
	window.brandsSlideL = slideLeft;
	function slideRight() {
		let left_arrow = document.querySelectorAll(".leftArrow")[1];
		slider.scrollLeft += 1200;
		left_arrow.style.display = "block";
	}

	function slideLeft() {
		slider.scrollLeft -= 1200;
		// right_arrow.style.display = "block";
	}
}
// Top Seller
function topSeller(data) {
	let slider = document.querySelector("#top-seller");
	// main div

	data.forEach((ele) => {
		let card = document.createElement("div");
		card.className = "card";
		// image div
		let img_holder = document.createElement("div");
		img_holder.className = "img-holder";

		let image = document.createElement("img");
		image.src = `${ele.image}`;

		img_holder.appendChild(image);

		// item name
		let item_name = document.createElement("p");
		item_name.innerHTML = `${ele.item_name}`;
		// item count
		let item_count = document.createElement("p");

		item_count.innerHTML = `${ele.item_count}`;
		item_count.style.marginBottom = "5px";
		// rating div
		let rating = document.createElement("div");
		rating.className = "rating";
		rating.style.marginTop = "0";
		let ratings = document.createElement("span");
		ratings.textContent = `${ele.ratings}`;
		let star_img = document.createElement("img");
		star_img.src = "./image/star.png";
		let rating_no = document.createElement("div");

		let no_of_rating = document.createElement("p");
		no_of_rating.style.color = "black";
		no_of_rating.style.width = "150px";
		no_of_rating.style.height = "50px";
		no_of_rating.innerHTML = `${ele.no_of_ratings}`;
		no_of_rating.style.marginTop = "0";
		rating_no.appendChild(no_of_rating);
		rating.append(ratings, star_img, rating_no);

		let item_price = document.createElement("div");
		item_price.className = "itemPrice";

		let actual_price = document.createElement("p");
		actual_price.className = "actualPrice";
		actual_price.style.width = "100%";
		actual_price.innerHTML = `MRP `;
		let actual_price_strike = document.createElement("strike");
		actual_price_strike.textContent = `${ele.actual_price}`;

		let off = document.createElement("span");
		off.innerHTML = `${ele.off}`;
		off.style.color = "green";
		actual_price.append(actual_price_strike, off);

		item_price.append(actual_price);
		let current_price = document.createElement("div");
		current_price.innerHTML = `${ele.current_price}`;

		card.append(
			img_holder,
			item_name,
			item_count,
			rating,
			item_price,
			current_price
		);

		slider.append(card);
	});
	window.topSlideR = slideRight;
	window.topSlideL = slideLeft;
	function slideRight() {
		let left_arrow = document.querySelectorAll(".leftArrow")[2];
		slider.scrollLeft += 1200;
		left_arrow.style.display = "block";
	}

	function slideLeft() {
		slider.scrollLeft -= 1200;
		// right_arrow.style.display = "block";
	}
}
// Popular Category slide
function popularCategory(data) {
	let slider = document.getElementById("popular-category");

	data.forEach((ele) => {
		let brand_item = document.createElement("div");
		brand_item.className = "brand-item";
		let image = document.createElement("img");
		image.src = `${ele.image}`;

		let name = document.createElement("p");
		name.innerHTML = `${ele.title}`;

		brand_item.append(image, name);
		slider.append(brand_item);
	});
	window.popularSlideR = slideRight;
	window.popularSlideL = slideLeft;
	function slideRight() {
		let left_arrow = document.querySelectorAll(".leftArrow")[3];
		slider.scrollLeft += 1200;
		left_arrow.style.display = "block";
	}

	function slideLeft() {
		slider.scrollLeft -= 1200;
		// right_arrow.style.display = "block";
	}
}

// Tata 1mg health products
function tataProduct(data) {
	let slider = document.querySelector("#tata-products");
	// main div

	data.forEach((ele) => {
		let card = document.createElement("div");
		card.className = "card";
		// image div
		let img_holder = document.createElement("div");
		img_holder.className = "img-holder";

		let image = document.createElement("img");
		image.src = `${ele.image}`;

		img_holder.appendChild(image);

		// item name
		let item_name = document.createElement("p");
		item_name.innerHTML = `${ele.item_name}`;
		// item count
		let item_count = document.createElement("p");

		item_count.innerHTML = `${ele.item_count}`;
		item_count.style.marginBottom = "5px";
		// rating div
		let rating = document.createElement("div");
		rating.className = "rating";
		rating.style.marginTop = "0";
		let ratings = document.createElement("span");
		ratings.textContent = `${ele.ratings}`;
		let star_img = document.createElement("img");
		star_img.src = "./image/star.png";
		let rating_no = document.createElement("div");

		let no_of_rating = document.createElement("p");
		no_of_rating.style.color = "black";
		no_of_rating.style.width = "150px";
		no_of_rating.style.height = "50px";
		no_of_rating.innerHTML = `${ele.no_of_ratings}`;
		no_of_rating.style.marginTop = "0";
		rating_no.appendChild(no_of_rating);
		rating.append(ratings, star_img, rating_no);

		let item_price = document.createElement("div");
		item_price.className = "itemPrice";

		let actual_price = document.createElement("p");
		actual_price.className = "actualPrice";
		actual_price.style.width = "100%";
		actual_price.innerHTML = `MRP `;
		let actual_price_strike = document.createElement("strike");
		actual_price_strike.textContent = `${ele.actual_price}`;

		let off = document.createElement("span");
		off.innerHTML = `${ele.off}`;
		off.style.color = "green";
		actual_price.append(actual_price_strike, off);

		item_price.append(actual_price);
		let current_price = document.createElement("div");
		current_price.innerHTML = `${ele.current_price}`;

		card.append(
			img_holder,
			item_name,
			item_count,
			rating,
			item_price,
			current_price
		);

		slider.append(card);
	});
	window.tataSlideR = slideRight;
	window.tataSlideL = slideLeft;
	function slideRight() {
		let left_arrow = document.querySelectorAll(".leftArrow")[4];
		slider.scrollLeft += 1200;
		left_arrow.style.display = "block";
	}

	function slideLeft() {
		slider.scrollLeft -= 1200;
		// right_arrow.style.display = "block";
	}
}
// Multivitamin Products
function multiVitamin(data) {
	let slider = document.querySelector("#multi-vitamin-products");
	// main div

	data.forEach((ele) => {
		let card = document.createElement("div");
		card.className = "card";
		// image div
		let img_holder = document.createElement("div");
		img_holder.className = "img-holder";

		let image = document.createElement("img");
		image.src = `${ele.image}`;

		img_holder.appendChild(image);

		// item name
		let item_name = document.createElement("p");
		item_name.innerHTML = `${ele.item_name}`;
		// item count
		let item_count = document.createElement("p");

		item_count.innerHTML = `${ele.item_count}`;
		item_count.style.marginBottom = "5px";
		// rating div
		let rating = document.createElement("div");
		rating.className = "rating";
		rating.style.marginTop = "0";
		let ratings = document.createElement("span");
		ratings.textContent = `${ele.ratings}`;
		let star_img = document.createElement("img");
		star_img.src = "./image/star.png";
		let rating_no = document.createElement("div");

		let no_of_rating = document.createElement("p");
		no_of_rating.style.color = "black";
		no_of_rating.style.width = "150px";
		no_of_rating.style.height = "50px";
		no_of_rating.innerHTML = `${ele.no_of_ratings}`;
		no_of_rating.style.marginTop = "0";
		rating_no.appendChild(no_of_rating);
		rating.append(ratings, star_img, rating_no);

		let item_price = document.createElement("div");
		item_price.className = "itemPrice";

		let actual_price = document.createElement("p");
		actual_price.className = "actualPrice";
		actual_price.style.width = "100%";
		actual_price.innerHTML = `MRP `;
		let actual_price_strike = document.createElement("strike");
		actual_price_strike.textContent = `${ele.actual_price}`;

		let off = document.createElement("span");
		off.innerHTML = `${ele.off}`;
		off.style.color = "green";
		actual_price.append(actual_price_strike, off);

		item_price.append(actual_price);
		let current_price = document.createElement("div");
		current_price.innerHTML = `${ele.current_price}`;

		card.append(
			img_holder,
			item_name,
			item_count,
			rating,
			item_price,
			current_price
		);

		slider.append(card);
	});
	window.vitaminSlideR = slideRight;
	window.vitaminSlideL = slideLeft;
	function slideRight() {
		let left_arrow = document.querySelectorAll(".leftArrow")[5];
		slider.scrollLeft += 1200;
		left_arrow.style.display = "block";
	}

	function slideLeft() {
		slider.scrollLeft -= 1200;
		// right_arrow.style.display = "block";
	}
}
// Explore Something new
function explore(data) {
	let slider = document.querySelector("#explore-products");
	// main div

	data.forEach((ele) => {
		let card = document.createElement("div");
		card.className = "card";
		// image div
		let img_holder = document.createElement("div");
		img_holder.className = "img-holder";

		let image = document.createElement("img");
		image.src = `${ele.image}`;

		img_holder.appendChild(image);

		// item name
		let item_name = document.createElement("p");
		item_name.innerHTML = `${ele.item_name}`;
		// item count
		let item_count = document.createElement("p");

		item_count.innerHTML = `${ele.item_count}`;
		item_count.style.marginBottom = "5px";
		// rating div
		let rating = document.createElement("div");
		rating.className = "rating";
		rating.style.marginTop = "0";
		let ratings = document.createElement("span");
		ratings.textContent = `${ele.ratings}`;
		let star_img = document.createElement("img");
		star_img.src = "./image/star.png";
		let rating_no = document.createElement("div");

		let no_of_rating = document.createElement("p");
		no_of_rating.style.color = "black";
		no_of_rating.style.width = "150px";
		no_of_rating.style.height = "50px";
		no_of_rating.innerHTML = `${ele.no_of_ratings}`;
		no_of_rating.style.marginTop = "0";
		rating_no.appendChild(no_of_rating);
		rating.append(ratings, star_img, rating_no);

		let item_price = document.createElement("div");
		item_price.className = "itemPrice";

		let actual_price = document.createElement("p");
		actual_price.className = "actualPrice";
		actual_price.style.width = "100%";
		actual_price.innerHTML = `MRP `;
		let actual_price_strike = document.createElement("strike");
		actual_price_strike.textContent = `${ele.actual_price}`;

		let off = document.createElement("span");
		off.innerHTML = `${ele.off}`;
		off.style.color = "green";
		actual_price.append(actual_price_strike, off);

		item_price.append(actual_price);
		let current_price = document.createElement("div");
		current_price.innerHTML = `${ele.current_price}`;

		card.append(
			img_holder,
			item_name,
			item_count,
			rating,
			item_price,
			current_price
		);

		slider.append(card);
	});
	window.exploreSlideR = slideRight;
	window.exploreSlideL = slideLeft;
	function slideRight() {
		let left_arrow = document.querySelectorAll(".leftArrow")[6];
		slider.scrollLeft += 1200;
		left_arrow.style.display = "block";
	}

	function slideLeft() {
		slider.scrollLeft -= 1200;
		// right_arrow.style.display = "block";
	}
}
// Shop by health concern
function healthConcern(data) {
	let slider = document.getElementById("health-concern");

	data.forEach((ele) => {
		let brand_item = document.createElement("div");
		brand_item.className = "brand-item";
		let image = document.createElement("img");
		image.src = `${ele.image}`;

		let name = document.createElement("p");
		name.innerHTML = `${ele.title}`;

		brand_item.append(image, name);
		slider.append(brand_item);
	});
	window.healthConcernSlideR = slideRight;
	window.healthConcernSlideL = slideLeft;
	function slideRight() {
		let left_arrow = document.querySelectorAll(".leftArrow")[7];
		slider.scrollLeft += 1200;
		left_arrow.style.display = "block";
	}

	function slideLeft() {
		slider.scrollLeft -= 1200;
		// right_arrow.style.display = "block";
	}
}
// <!-- Trending products -->
function trending(data) {
	let slider = document.querySelector("#trending-products");
	// main div

	data.forEach((ele) => {
		let card = document.createElement("div");
		card.className = "card";
		// image div
		let img_holder = document.createElement("div");
		img_holder.className = "img-holder";

		let image = document.createElement("img");
		image.src = `${ele.image}`;

		img_holder.appendChild(image);

		// item name
		let item_name = document.createElement("p");
		item_name.innerHTML = `${ele.item_name}`;
		// item count
		let item_count = document.createElement("p");

		item_count.innerHTML = `${ele.item_count}`;
		item_count.style.marginBottom = "5px";
		// rating div
		let rating = document.createElement("div");
		rating.className = "rating";
		rating.style.marginTop = "0";
		let ratings = document.createElement("span");
		ratings.textContent = `${ele.ratings}`;
		let star_img = document.createElement("img");
		star_img.src = "./image/star.png";
		let rating_no = document.createElement("div");

		let no_of_rating = document.createElement("p");
		no_of_rating.style.color = "black";
		no_of_rating.style.width = "150px";
		no_of_rating.style.height = "50px";
		no_of_rating.innerHTML = `${ele.no_of_ratings}`;
		no_of_rating.style.marginTop = "0";
		rating_no.appendChild(no_of_rating);
		rating.append(ratings, star_img, rating_no);

		let item_price = document.createElement("div");
		item_price.className = "itemPrice";

		let actual_price = document.createElement("p");
		actual_price.className = "actualPrice";
		actual_price.style.width = "100%";
		actual_price.innerHTML = `MRP `;
		let actual_price_strike = document.createElement("strike");
		actual_price_strike.textContent = `${ele.actual_price}`;

		let off = document.createElement("span");
		off.innerHTML = `${ele.off}`;
		off.style.color = "green";
		actual_price.append(actual_price_strike, off);

		item_price.append(actual_price);
		let current_price = document.createElement("div");
		current_price.innerHTML = `${ele.current_price}`;

		card.append(
			img_holder,
			item_name,
			item_count,
			rating,
			item_price,
			current_price
		);

		slider.append(card);
	});
	window.trendingSlideR = slideRight;
	window.trendingSlideL = slideLeft;
	function slideRight() {
		let left_arrow = document.querySelectorAll(".leftArrow")[8];
		slider.scrollLeft += 1200;
		left_arrow.style.display = "block";
	}

	function slideLeft() {
		slider.scrollLeft -= 1200;
		// right_arrow.style.display = "block";
	}
}

// Pathology Tests
function pathologyTest(data) {
	var slider = document.querySelector("#pathology-tests");
	data.forEach(function (ele) {
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

		item.append(item_heading, test_includes, tata_logo, item_price);
		slider.append(item);
	});

	// let right_arrow = document.getElementById("rightArrow");
	window.PathologySlideR = slideRight;
	window.PathologySlideL = slideLeft;
	function slideRight() {
		let left_arrow = document.querySelectorAll(".leftArrow")[9];
		slider.scrollLeft += 1200;
		left_arrow.style.display = "block";
	}

	function slideLeft() {
		slider.scrollLeft -= 1200;
		// right_arrow.style.display = "block";
	}
}

// Radiology tests
function radiologyTest(data) {
	var slider = document.querySelector("#radiology-tests");
	data.forEach(function (ele) {
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

		item.append(item_heading, test_includes, tata_logo, item_price);
		slider.append(item);
	});

	// let right_arrow = document.getElementById("rightArrow");
	window.RadiologySlideR = slideRight;
	window.RadiologySlideL = slideLeft;
	function slideRight() {
		let left_arrow = document.querySelectorAll(".leftArrow")[10];
		slider.scrollLeft += 1200;
		left_arrow.style.display = "block";
	}

	function slideLeft() {
		slider.scrollLeft -= 1200;
		// right_arrow.style.display = "block";
	}
}

// <!-- Ayurveda -->
// Footer section
document.querySelector(".footer").innerHTML = await footer();

export { exportdata };
