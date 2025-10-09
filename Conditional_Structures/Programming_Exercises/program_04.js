/*
    1.  Get character from the user of figure name S or T.  ✅
    2.  if S calculate area of square; area= side*side.     ✅
    3.  if T calculate triangle area; 1/2 * base * height   ✅

*/

let fig_ch = "T";
let area;
let base = 20;
let height = 30;
let side = 10;

if (fig_ch === "S") {
  area = side * side;
  console.log(`Area of square: ${area}`);
} else if (fig_ch === "T") {
  area = (1 / 2) * base * height;
  console.log(`Area of triangle: ${area}`);
} else {
  console.log("❌ Invalid character.");
}
