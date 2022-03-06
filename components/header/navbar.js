async function topHeader() {
	return `
        <div class="logo">
          <a id="home-page" href="./index.html"><img src="./image/tata_1mg_logo.svg" alt="1mg-logo" /></a>
        </div>
        <ul id="navbar-ul">
          <li>
            <div class="page-link" ><a id="home-page" href="./index.html">MEDICINES</a></div>
          </li>
          <li id="safe-style">
            <div class="page-link mr-0 pr-2"><a id="labtest-page" href="./labtest.html" target="_blank">LAB TESTS</a></div>
            <div class="safe">SAFE</div>
          </li>
          <li>
            <div class="page-link"><a id="askdoctor-page" href="./askdoctor.html" target="_blank">ASK DOCTOR</a></div>
          </li>
          <li>
            <div class="page-link"><a id="covid-page" href="./covid-19.html" target="_blank">COVID-19</a></div>
          </li>
          <li>
            <div class="page-link">
              <a id="ayurveda-page" href="./ayurveda.html" target="_blank">AYURVEDA</a>
            </div>
          </li>
          <li id="save-more">
            <div class="page-link mr-0 pr-2"><a id="careplan-page" href="./careplan.html" target="_blank">CARE PLAN</a></div>
            <div class="safe">SAVE MORE</div>
          </li>
        </ul>
        <div class="header-right-part">
          <div class="login"><span onclick="loginOn()">Login</span> | <span onclick="signupOn()">Sign Up</span></div>
          <div class="offers"><a href="">Offers</a></div>
          <div class="cart">
            <img src="./image/cart-icon-rebrand_vp4k0f.svg" alt="cart-icon" />
            <div id="cart-icon"></div>
            <div class="cart-content">
              <div class="order-count">
                <div>Order Summary</div>
                <div class="count" id="cart_count">0 Item</div>
              </div>
              <div class="cart-link"><a href="./cart.html" target="_blank">PROCEED TO CART</a></div>
            </div>
          </div>
          <div class="help"><a href="./help.html" target="_blank">Need Help?</a></div>
        </div>
      `;
}

async function searchBox() {
	return `  
        <div class="left-input-container">
          <div class="location-picker">
            <span id="location-dot"><i class="fa fa-map-marker"></i></span>
            <input
              type="text"
              placeholder="Enter Your City"
              autocomplete="off"
              value="New Delhi"
              id="location"
              onblur="hide()"
            />
            <span id="location-crosshair"
              ><img src="./image/location-crosshairs-solid.svg" alt=""
            /></span>
            <div class="location-selection">
              <ul>
                <li>Top Cities</li>
                <li onclick="updateCity("New Delhi")">New Delhi</li>
                <li onclick="updateCity("Gurgaon")">Gurgaon</li>
                <li onclick="updateCity("Pune")">Pune</li>
                <li onclick="updateCity("Mumbai")">Mumbai</li>
                <li onclick="updateCity("Bengaluru")">Bengaluru</li>
                <li onclick="updateCity("Kolkata")">Kolkata</li>
                <li onclick="updateCity("Hyderabad")">Hyderabad</li>
                <li onclick="updateCity("Ahmedabad")">Ahmedabad</li>
                <li onclick="updateCity("Chennai")">Chennai</li>
                <li onclick="updateCity("Indore")">Indore</li>
                <li onclick="updateCity("Lucknow")">Lucknow</li>
              </ul>
            </div>
          </div>
          <div class="search-input">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for Medicines and Health Products"
              autocomplete="off"
              value
            />
            <span id="magnifying-glass"
              ><img src="./image/magnifying-glass-solid.svg" alt=""
            /></span>
          </div>
        </div>
        <div class="right-side">
          <div class="sell-info">
            <div class="flash"></div>
            <div>QUICK BUY! Flat 25% off on medicines*</div>
          </div>
          <div class="upload-btn">Upload</div>
        </div>
      `;
}

async function links() {
	return `
        <ul>
          <li>
            <div class="link">
              <a href="#"><span>Health Resource Center</span></a
              ><i class="fa fa-angle-down drop-icon"></i>
              <div class="dropdown-content">
                <a href="./allDisease.html" target="_blank">All Diseases</a>
                <a href="">All Medicines</a>
                <a href="">Medicine by Therapeutics Class</a>
              </div>
            </div>
          </li>
          <li>
            <div class="link">
              <a href="#"><span>Covid Essentials</span></a
              ><i class="fa fa-angle-down drop-icon"></i>
              <div class="dropdown-content">
                <a href="">Covid-19 Self test kits</a>
		<a href=""> Oxygen Cans & Concentrators</a>
		<a href=""> Masks </a>
		<a href=""> Sanitizers & Handwash Products </a>
		<a href=""> Boost Your Immunity </a>
		<a href=""> Thermometer </a>
		<a href=""> Chyawanprash</a>
              </div>
            </div>
          </li>
          <li>
            <div class="link">
              <a href="#"><span>Featured</span></a
              ><i class="fa fa-angle-down drop-icon"></i>
              <div class="dropdown-content">
                <a href="">All Diseases</a>
                <a href="">All Medicines</a>
                <a href="">Medicine by Therapeutics Class</a>
              </div>
            </div>
          </li>
          <li>
            <div class="link">
              <a href="#"><span>Vitamins & Nutrition</span></a
              ><i class="fa fa-angle-down drop-icon"></i>
              <div class="dropdown-content">
                <a href="">All Diseases</a>
                <a href="">All Medicines</a>
                <a href="">Medicine by Therapeutics Class</a>
              </div>
            </div>
          </li>
          <li>
            <div class="link">
              <a href="#"><span>Diabetes</span></a
              ><i class="fa fa-angle-down drop-icon"></i>
              <div class="dropdown-content">
                <a href="">All Diseases</a>
                <a href="">All Medicines</a>
                <a href="">Medicine by Therapeutics Class</a>
              </div>
            </div>
          </li>
          <li>
            <div class="link">
              <a href="#"><span>Healthcare Devices</span></a
              ><i class="fa fa-angle-down drop-icon"></i>
              <div class="dropdown-content">
                <a href="">All Diseases</a>
                <a href="">All Medicines</a>
                <a href="">Medicine by Therapeutics Class</a>
              </div>
            </div>
          </li>
          <li>
            <div class="link">
              <a href="#"><span>Personal Care</span></a
              ><i class="fa fa-angle-down drop-icon"></i>
              <div class="dropdown-content">
                <a href="">All Diseases</a>
                <a href="">All Medicines</a>
                <a href="">Medicine by Therapeutics Class</a>
              </div>
            </div>
          </li>
          <li>
            <div class="link">
              <a href="#"><span>Health Conditions</span></a
              ><i class="fa fa-angle-down drop-icon"></i>
              <div class="dropdown-content">
                <a href="">All Diseases</a>
                <a href="">All Medicines</a>
                <a href="">Medicine by Therapeutics Class</a>
              </div>
            </div>
          </li>
          <li>
            <div class="link">
              <a href="#"><span>Ayurveda Products</span></a
              ><i class="fa fa-angle-down drop-icon"></i>
              <div class="dropdown-content">
                <a href="">All Diseases</a>
                <a href="">All Medicines</a>
                <a href="">Medicine by Therapeutics Class</a>
              </div>
            </div>
          </li>
          <li>
            <div class="link">
              <a href="#"><span>Homeopathy</span></a
              ><i class="fa fa-angle-down drop-icon"></i>
              <div class="dropdown-content">
                <a href="">All Diseases</a>
                <a href="">All Medicines</a>
                <a href="">Medicine by Therapeutics Class</a>
              </div>
            </div>
          </li>
        </ul>
      `;
}

export { topHeader, searchBox, links };
