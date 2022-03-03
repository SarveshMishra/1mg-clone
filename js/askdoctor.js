import { topHeader } from "../components/header/navbar.js";
import showList from "../components/header/index.js";
import changeLinkColor from "../scripts/changeLinkColor.js";
import footer from "../components/footer/footer.js";

// Navbar Import section
document.querySelector(".header-sec-1").innerHTML = await topHeader();

// Body section

  var slides = document.getElementsByClassName("h-customer-slide");
  var dots = document.getElementsByClassName("dot");
    var prevDot='';
    var prevSlide='';
for(let i=0;i<dots.length;i++){
    
    console.log(dots[i].className)
    dots[i].addEventListener('click',function(){

        if(prevDot.className=='dot dot-active' && prevSlide.style.display=='block'){
            prevDot.className=prevDot.className.replace('dot-active',"");
            prevSlide.style.display='none';
            
        }
        dots[i].className="dot dot-active";
        slides[i].style.display='block';
        prevSlide=slides[i];
        prevDot=dots[i]
        
    });
    
}

// Footer section
document.querySelector(".footer").innerHTML = await footer();
