function logSubmit(event) {
  input.textContent = "ordered!";
  grimace.classList.add("active");
  form.remove();
  input.remove();
  document.querySelector('.h1').remove();
  document.querySelector('.p').remove();
  document.body.style.backgroundColor = "white";
  navigator.geolocation.getCurrentPosition((position) => {
  alert("Your coordinates: Latitude "+position.coords.latitude+", Longitude "+position.coords.longitude)
});
  
  event.preventDefault();
}

const form = document.querySelector(".formthing");
const input = document.querySelector(".status");
const grimace = document.querySelector(".grimace");
form.addEventListener("submit", logSubmit);
