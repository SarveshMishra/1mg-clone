async function login() {
	return `<div class="login-container">
			<div class="left-part"></div>
			<div class="right-part">
				<div class="cross" onclick="loginOff()">X</div>
				<h1>Login</h1>
				<h5>Get access to your orders, lab tests & doctor consultations</h5>
				<div class="input-wrapper">
					<label for="login-input">Enter Email ID or Phone Number</label>
					<input type="login-username" name="" id="" />
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
			<div class="left-part"></div>
			<div class="right-part">
				<div class="cross" onclick="signupOff()">X</div>
				<h1>Sign up</h1>
				<h5>
					Please enter your Mobile number to receive One Time Password (OTP)
				</h5>
				<div class="input-wrapper">
					<label for="login-input">Enter Phone Number</label>
					<input type="login-username" name="" id="" />
				</div>
				<div class="login-btn">Continue</div>

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
