async function login() {
	return `<div class="login-container">
			<div class="left-part">
				<div id="lslider">
					<input type="radio" name="lslider" id="lslide1" checked />
					<input type="radio" name="lslider" id="lslide2" />
					<input type="radio" name="lslider" id="lslide3" />
					<input type="radio" name="lslider" id="lslide4" />
					<div id="lslides">
						<div id="loverflow">
							<div class="linner">
								<div class="lslide slide_1">
									<div class="lslide-content">
										<img src="../../image/login1.png" />

										<h4>Make Healthcare Simpler</h4>
									</div>
								</div>
								<div class="lslide slide_2">
									<div class="lslide-content">
										<img src="../../image/login2.png" />
										<h4>Know your medicines</h4>
									</div>
								</div>
								<div class="lslide slide_3">
									<div class="lslide-content">
										<img src="../../image/login3.png" />
										<h4>Medicines, Home Delivered</h4>
									</div>
								</div>
								<div class="lslide slide_4">
									<div class="lslide-content">
										<img src="../../image/login4.png" />
										<h4>Lab Tests at Home</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="lcontrols">
						<label for="lslide1"></label>
						<label for="lslide2"></label>
						<label for="lslide3"></label>
						<label for="lslide4"></label>
					</div>
					<div id="lbullets">
						<label for="lslide1"></label>
						<label for="lslide2"></label>
						<label for="lslide3"></label>
						<label for="lslide4"></label>
					</div>
				</div>
			</div>

			<div class="right-part">
				<div class="cross" onclick="loginOff()">X</div>
				<h1>Login</h1>
				<h5>Get access to your orders, lab tests & doctor consultations</h5>
				<div class="input-wrapper">
					<label for="login-input">Enter Email ID or Phone Number</label>
					<input type="login-username" name="" id="login-username" />
				</div>
				<div class="login-btn">Login</div>

				<div class="bottom-content">
					<p>New on 1mg? <span onclick="signupOn()">Sign Up</span></p>
					<p>Have a corporate account? <a href="">Click here</a></p>
					<p>
						By logging in, you agree to our
						<a href=""> Terms and Conditions </a> & Privacy Policy<a href="">
							Need Help? </a
						>Get In Touch
					</p>
				</div>
			</div>
		</div>
`;
}
async function signup() {
	return `<div class="login-container">
			<div class="left-part">
				<div id="lslider">
					<input type="radio" name="lslider" id="lslide1" checked />
					<input type="radio" name="lslider" id="lslide2" />
					<input type="radio" name="lslider" id="lslide3" />
					<input type="radio" name="lslider" id="lslide4" />
					<div id="lslides">
						<div id="loverflow">
							<div class="linner">
								<div class="lslide slide_1">
									<div class="lslide-content">
										<img src="../../image/login1.png" />

										<h4>Make Healthcare Simpler</h4>
									</div>
								</div>
								<div class="lslide slide_2">
									<div class="lslide-content">
										<img src="../../image/login2.png" />
										<h4>Know your medicines</h4>
									</div>
								</div>
								<div class="lslide slide_3">
									<div class="lslide-content">
										<img src="../../image/login3.png" />
										<h4>Medicines, Home Delivered</h4>
									</div>
								</div>
								<div class="lslide slide_4">
									<div class="lslide-content">
										<img src="../../image/login4.png" />
										<h4>Lab Tests at Home</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="lcontrols">
						<label for="lslide1"></label>
						<label for="lslide2"></label>
						<label for="lslide3"></label>
						<label for="lslide4"></label>
					</div>
					<div id="lbullets">
						<label for="lslide1"></label>
						<label for="lslide2"></label>
						<label for="lslide3"></label>
						<label for="lslide4"></label>
					</div>
				</div>
			</div>

			<div class="right-part">
				<div class="cross" onclick="signupOff()">X</div>
				<h1>Sign up</h1>
				<h5>
					Please enter your Mobile number to receive One Time Password (OTP)
				</h5>
				<div class="input-wrapper">
					<label for="login-input">Enter Email ID</label>
					<input type="login-username" name="" id="signup-email" />
				</div>
				<div class="login-btn" id="signup-btn">Continue</div>

				<div class="bottom-content">
					<p>Have a account <span onclick="loginOn()">Login</span></p>
					<p>Have a corporate account? <a href="">Click here</a></p>
					<p>
						By logging in, you agree to our
						<a href=""> Terms and Conditions </a> & Privacy Policy<a href="">
							Need Help? </a
						>Get In Touch
					</p>
				</div>
			</div>
		</div>
`;
}

export { login, signup };
