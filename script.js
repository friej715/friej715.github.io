let dropdown = document.getElementById("dropdown");
let display = document.getElementById("display");
display.innerHTML = dropdown.value;

dropdown.addEventListener('change', (event) => {
   display.innerHTML =  event.target.value
})