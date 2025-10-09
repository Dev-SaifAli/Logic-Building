/*

1. senior_salary = 400; junior_salary=275;
2. Accepts salesperson's status in the character variable named "Status".
3. if status is 's' || 'S' -> senior_salary and if status is 'j' || 'J' -> junior_salary otherwise display error message

*/

let senior_salary = 400;
let junior_salary = 275;
let status = "S";
if (status == "s" || status == "S") {
  console.log(`💵 Here, is the senior's salary: ${senior_salary}`);
} else if (status == "j" || status == "J") {
  console.log(`💵 Here, is the junior's salary: ${junior_salary}`);
} else {
  console.log(`❌ Invalid input.`);
}
