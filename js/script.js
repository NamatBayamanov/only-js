// document.getElementById("alert");

// let alerts = document.getElementById("alert");

// alerts.style.color = "blue";

document.querySelector("#header");
const header = document.querySelector("#header");



document.querySelector("#alert");

let alerts = document.querySelector("#alert");

alerts.style.color = "blue";

alerts.addEventListener("click", function(event) {
  alert("hello world", event);
});


document.querySelector("#container");
let container = document.querySelector("#container");


document.createElement("input");

let inp = document.createElement("input");

container.prepend(inp);

inp.style.border = "2px solid red";

inp.addEventListener("keydown", function(event) {

  let num = 9

    if(event.key.includes(num)) {
      event.preventDefault(false);
    }
    else {
      " "
    }


});



document.createElement("hr");
let hr = document.createElement("hr");
hr.style.border = "1px solid black";
hr.style.backgroundColor = "black";
hr.style.marginBottom = "2rem";
alerts.append(hr);


document.querySelector("#example-1__button");
const button = document.querySelector("#example-1__button");


document.querySelector("#example-1__span");
let span = document.querySelector("#example-1__span");

span.style.color = "red";




span.textContent = localStorage.getItem("decriment") ?? 0;

button.addEventListener("click", function(event) {
  span.textContent--;

  localStorage.setItem("decriment", span.textContent);
});

document.querySelector("#input");
let storageInput = document.querySelector("#input");

storageInput.style.border = "2px solid black";


storageInput.value = window.localStorage.getItem("storageInput");

storageInput.addEventListener("input", function(event) {
  window.localStorage.setItem("storageInput", storageInput.value);
});

// document.querySelector("body");
// const body = document.querySelector("body");


document.querySelector("#theme");

let theme = document.querySelector("#theme");

theme.style.border = "2px solid black";

document.body.classList = window.localStorage.getItem("themeOfPage");

theme.addEventListener("input", function(event) {
  document.body.classList.toggle("active");

  window.localStorage.setItem("themeOfPage", document.body.classList);
});





document.querySelector("#example-2 button");
let button2 = document.querySelector("#example-2 button");


let timeId;

button2.addEventListener("click", function(event) {
  button2.textContent = "Generating...";

  window.clearTimeout(timeId);

  timeId = window.setTimeout(function() {
    button2.textContent = Math.random();
  }, 2000);
});





document.querySelector("#example-3 span");

let intervalSpan = document.querySelector("#example-3 span");

document.querySelector("#example-3 button");

let intervalButton = document.querySelector("#example-3 button");


let exampleInterval = window.setInterval( () => {
  intervalSpan.textContent++;
}, 1000);

intervalButton.addEventListener("click", function(event) {
  window.clearInterval(exampleInterval);
});


document.querySelector("#example4 h2");
let timeH2 = document.querySelector("#example4 h2");

document.querySelector("#example4 #timeStart");
let startButton = document.querySelector("#example4 #timeStart");

document.querySelector("#example4 #timeStop");
let stopButton = document.querySelector("#example4 #timeStop");


startButton.style.color = "red";
stopButton.style.color = "blue";

timeH2.style.color = window.localStorage.getItem("colorh2");

let startTime;

startButton.addEventListener("click", function(event) {

  window.clearInterval(startTime);
  
  startTime = window.setInterval( () => {
    timeH2.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  }, 500);

  stopButton.addEventListener("click", function(event) {
    window.clearInterval(startTime);

    window.localStorage.setItem("colorh2", timeH2.style.color);
  });


});



