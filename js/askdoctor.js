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


// Footer section
document.querySelector(".footer").innerHTML = await footer();
