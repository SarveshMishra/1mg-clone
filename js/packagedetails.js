import { topHeader, searchBox, links } from "../components/header/navbar.js";
import footer from "../components/footer/footer.js";

// Navbar Import section
document.querySelector(".header-sec-1").innerHTML = await topHeader();
document.querySelector(".search-box").innerHTML = await searchBox();

const myObjectString2 = localStorage.getItem('order_details');
  const myObject2 = JSON.parse(myObjectString2);
  console.log(myObject2);
localStorage.removeItem('order_details');