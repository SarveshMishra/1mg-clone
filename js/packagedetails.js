import { topHeader, searchBox, links } from "../components/header/navbar.js";
import footer from "../components/footer/footer.js";

// Navbar Import section
document.querySelector(".header-sec-1").innerHTML = await topHeader();
document.querySelector(".search-box").innerHTML = await searchBox();

let packageitem = JSON.parse(localStorage.getItem('order_details'));
let package_details=document.getElementById('package-details');

displaypackage();


function displaypackage(){
    let item = document.createElement("div");
    item.className = "item";

		let item_heading = document.createElement("div");
		item_heading.className = "itemHeading";
		let h4 = document.createElement("h4");
		h4.textContent = packageitem.title;
		
		

		let test_includes = document.createElement("div");
		test_includes.className = "testIncludes";
		test_includes.textContent = "Includes " + packageitem.testInclude + " tests";

    item_heading.append(h4,test_includes);

		let item_price = document.createElement("div");
		item_price.className = "itemPrice";

		let price = document.createElement("p");
		price.className = "price";
		price.textContent = "₹" + packageitem.price;

		let actual_price = document.createElement("p");
		actual_price.className = "actualPrice";
		let actual_price_strike = document.createElement("strike");
		actual_price_strike.textContent = " " + "₹" + packageitem.actualPrice;

    //add to cart
    let add_to_cart=document.createElement('h2');
    add_to_cart.className='add-to-cart';
    add_to_cart.textContent="ADD TO CART";
    let go_to_cart=document.createElement('h2');
    go_to_cart.className='go-to-cart';
    go_to_cart.textContent="GO TO CART";

    if(localStorage.getItem('cart')==null){
      localStorage.setItem('cart',JSON.stringify([]));
    }
    // }else if(checkAvailableInCart==true){
    //   go_to_cart.style.display='block';
    //   add_to_cart.style.display='none';
    // }else{
    //   add_to_cart.style.display='block';
    //   go_to_cart.style.display='none';
    // }

    
      // go_to_cart.addEventListener('click',function(){
      //   window.open('cart.html','_blank');
      // });
    
  
    
      add_to_cart.addEventListener('click',function(){
          let old_cart=JSON.parse(localStorage.getItem('cart'));
          old_cart.push(packageitem);
          localStorage.setItem('cart',JSON.stringify(old_cart));
          go_to_cart.style.display='block';
     
   });

    let overview_heading=document.createElement('h2');
    overview_heading.className="overview-heading";
    overview_heading.textContent='Overview of '+packageitem.title;

    let overview_detail=document.createElement('div');

    let overview_detail_heading=document.createElement('h2');
    overview_detail_heading.className="overview-detail-heading";
    overview_detail_heading.textContent="How "+packageitem.title+" helps you?"

    let overview_p=document.createElement('p');
    overview_p.className='overview_p';
    overview_p.textContent=packageitem.discription;

    overview_detail.append(overview_detail_heading,overview_p);


		actual_price.append(actual_price_strike);

    item_price.append(actual_price,price);

    let discount = document.createElement("div");
		discount.className = "discount";
		discount.textContent = packageitem.discount + "% off";

   

    item.append(item_heading,item_price,discount,add_to_cart);

    package_details.append(item,overview_heading,overview_detail);
}


function checkAvailableInCart(){
  let cart=JSON.parse(localStorage.getItem('cart'));
  cart.forEach(function(ele){
    if(packageitem.title==ele.title){
      return true;
    }
  });
  return false;
}

function addingCart(){
  let cart=localStorage.getItem('cart');
  if(cart==null){
    localStorage.setItem('cart',JSON.stringify(package_details));
  }else{
    let oldcart=localStorage.getItem(JSON.stringify('cart'));
    oldcart.push(package_details);
    localStorage.setItem('cart',JSON.stringify(oldcart));
  }
}
  // console.log(packageitem.title);

// localStorage.removeItem('order_details');