/*
    1. Leap year divisible by 4 except divisible by 100 and by 400.
    2. inputs a year
    3. displays "Leap year" if it is a leap year otherwise "Not a leap year"
*/

let year = 2025;
if (year % 4 == 0) {
  if (year % 100 == 0 && year % 400 == 0) {
    console.log("Not a leap year");
  } else {
    console.log("Leap Year");
  }
} else {
  console.log("Not a leap year");
}
