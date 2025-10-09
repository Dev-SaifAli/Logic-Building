/*
    1.  Required : value and type of conversion
    2.  The program should include the following conversions
    1 inch = 2.54 centimeters
    1 gallon = 3.785 liters
    1 mile = 1.609 kilometers
    1 pound= .4536 kilograms

*/
let one_inch = 2.54;
let one_gallon = 3.785;
let one_mile = 1.609;
let one_pound = 0.4536;

let dropDown = document.getElementById("conversion");

let output = document.getElementById("result");
let conversion;

function unitConversion() {
  const selectElement = document.getElementById("conversion");
  const selectedText = selectElement.options[selectElement.selectedIndex].text;
  console.log("Selected Text:", selectedText);

  switch (selectedText) {
    case "centimeters": {
      let value = document.getElementById("value").value;
      console.log(value);
      if (!value) {
        alert("Please enter some value! 🤔");
        return;
      }
      conversion = (value * one_inch).toFixed(2);
      console.log(conversion);
      output.innerHTML = `${conversion} centimeters`;
      break;
    }
    case "liters": {
      let value = document.getElementById("value").value;
      if (!value) {
        alert("Please enter some value! 🤔");
        return;
      }
      conversion = (value * one_gallon).toFixed(2);
      output.innerHTML = `${conversion} liters`;
      break;
    }
    case "kilometers": {
      let value = document.getElementById("value").value;
      if (!value) {
        alert("Please enter some value! 🤔");
        return;
      }
      conversion = (value * one_mile).toFixed(2);
      output.innerHTML = `${conversion} kilometers`;
      break;
    }
    case "kilograms": {
      let value = document.getElementById("value").value;
      if (!value) {
        alert("Please enter some value! 🤔");
        return;
      }
      conversion = (value * one_pound).toFixed(2);
      output.innerHTML = `${conversion} kilograms`;
      break;
    }
  }
}

// ;
dropDown.addEventListener("change", function () {
  setTimeout(unitConversion, 250);
});
