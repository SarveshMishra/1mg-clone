import { topHeader, searchBox, links } from "../components/header/navbar.js";
import showList from "../components/header/index.js";
import changeLinkColor from "../scripts/changeLinkColor.js";
import footer from "../components/footer/footer.js";

// Footer section
document.querySelector(".footer").innerHTML= await footer();
// Navbar Import section
document.querySelector(".header-sec-1").innerHTML = await topHeader();
document.querySelector(".search-box").innerHTML = await searchBox();
document.querySelector(".links-box").innerHTML = await links();
changeLinkColor()
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

// Body section

// Footer section
document.querySelector(".footer").innerHTML= await footer();