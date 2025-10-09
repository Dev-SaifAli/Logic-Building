/*
    1. Gets the number and letter
    2. if letter='f' -> treat number as fahrenheit temp and converts to to degree celsius & print a suitable message. temp-32 *5/9;
    3. if letter='c' -> treat number as celsius temp and coverts into degree fahrenheit & print a suitable message.
    9/5*temp+32;
    4. Display error message if user enters any other letter.

*/

let number = 91.5;
let letter = "f";
let temp;
if (letter == "f") {
  temp = (((number - 32) * 5) / 9).toFixed(2);
  console.log(`${number} Fahrenheit = ${temp} Celsius`);
} else if (letter == "c") {
  temp = ((9 / 5) * number + 32).toFixed(2);
  console.log(`${number} Celsius = ${temp} Fahrenheit`);
} else {
  console.log("❌ Invalid letter. Enter the letter 'f' or 'c'");
}
