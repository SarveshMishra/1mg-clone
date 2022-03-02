
function showList() {
  document.getElementById("location").addEventListener("click", showList);
  let list = document.querySelector(".location-selection ");
  list.style.visibility = "visible";
}


export default showList;