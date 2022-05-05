// document.getElementById("alert");

// let alerts = document.getElementById("alert");

// alerts.style.color = "blue";


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

container.append(inp);

inp.style.border = "2px solid red";

inp.addEventListener("keydown", function(event) {

  let num = 8 < 7 && 9 < 5 ;

    if(event.key.includes(num)) {
      event.preventDefault(false);
    }
    else {
      " "
    }


});