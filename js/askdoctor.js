import { topHeader } from "../components/header/navbar.js";
import showList from "../components/header/index.js";
import changeLinkColor from "../scripts/changeLinkColor.js";
import footer from "../components/footer/footer.js";

// Navbar Import section
document.querySelector(".header-sec-1").innerHTML = await topHeader();

// Body section

// Footer section
document.querySelector(".footer").innerHTML = await footer();
