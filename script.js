// var simonsCar = "White nissan Skyline";
// var melissasCar = "red Mazda 6";
// f(x) = 
// console.log(simonsCar);

// function multiplyByFive(x) {
//   return 5*x;
// };
// console.log(multiplyByFive(2));

// console.log("Simon's car is a ", simonsCar, "and it is awesome")

// Create  a function that logs to the console, simonsCar.
  
var nameHeader = document.getElementById("name-header");
var nameInput = document.getElementById("name-input");

var colourHeader = document.getElementById("colour-header");
var colourInput = document.getElementById("colour-input");

function changeHeaderText() {
  var name = nameInput.value;
  var introText = "Hi there, ";

  var textToRender = introText + name;

  nameHeader.innerText = textToRender;
};

function changeColourText() {
  var colour = colourInput.value;

  var introText = "I think that ";
  var endText = " is a great colour!!";
  var textToRender = introText + colour + endText;

  colourHeader.innerText = textToRender;
  colourHeader.style.color = colour;
};
