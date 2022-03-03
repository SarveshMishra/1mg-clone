import { topHeader, searchBox, links } from "../components/header/navbar.js";
import showList from "../components/header/index.js";
import changeLinkColor from "../scripts/changeLinkColor.js";
import footer from "../components/footer/footer.js";

// Navbar Import section
document.querySelector(".header-sec-1").innerHTML = await topHeader();
document.querySelector(".search-box").innerHTML = await searchBox();
document.querySelector(".links-box").innerHTML = await links();

changeLinkColor();
window.hide = hide;
document.getElementById("location").addEventListener("click", showList);

function hide() {
	let container = document.querySelector(".location-selection ");
	document.addEventListener("mouseup", function (e) {
		if (!container.contains(e.target)) {
			container.style.visibility = "hidden";
		}
	});
}

// Database Section
importDB();
async function importDB() {
	let DB = await (await fetch("../json/database.json")).json();
	featureBrands(DB.FeatureBrand);
	healthCheckup(DB.data);
	pathologyTest(DB.data);
	radiologyTest(DB.data);
	healthConcern(DB.shopByHealthConcerns);
}

//Full Body Health Checkups

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
		let left_arrow = document.querySelectorAll(".leftArrow")[1];
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
		let left_arrow = document.querySelectorAll(".leftArrow")[1];
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
		let left_arrow = document.querySelectorAll(".leftArrow")[2];
		slider.scrollLeft += 1200;
		left_arrow.style.display = "block";
	}

	function slideLeft() {
		slider.scrollLeft -= 1200;
		// right_arrow.style.display = "block";
	}
}
// Footer section
document.querySelector(".footer").innerHTML = await footer();
