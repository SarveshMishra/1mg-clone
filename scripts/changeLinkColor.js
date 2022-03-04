export default function changeLinkColor() {
	let url = window.location.href;

	if (
		url == `https://1mg-clone.netlify.app/` ||
		url == `http://1mg-clone.netlify.app/index.html`
	) {
		document.querySelector("#home-page").style.color = "#ff6f61";
	} else if (url == `https://1mg-clone.netlify.app/labtest.html`) {
		document.querySelector("#labtest-page").style.color = "#ff6f61";
	} else if (url == `https://1mg-clone.netlify.app/askdoctor.html`) {
		document.querySelector("#askdoctor-page").style.color = "#ff6f61";
	} else if (url == `https://1mg-clone.netlify.app/covid-19.html`) {
		document.querySelector("#covid-page").style.color = "#ff6f61";
	} else if (url == `https://1mg-clone.netlify.app/ayurveda.html`) {
		document.querySelector("#ayurveda-page").style.color = "#ff6f61";
	} else if (url == `https://1mg-clone.netlify.app/careplan.html`) {
		document.querySelector("#careplan-page").style.color = "#ff6f61";
	}
}
