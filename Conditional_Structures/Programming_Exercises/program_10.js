/*
    1. Inputs 3 subjects marks. ✅
    2. Displays the sum and average. ✅
    3. Displays "PASS" if marks of each subject >=40 otherwise "FAIL". ✅
*/

// Subject Marks
let chemistry = 50;
let physics = 50;
let computer = 50;

let passingMarks = 40;
let sum, avg;
sum = chemistry + physics + computer;
console.log("Total marks: ", sum);
avg = (sum / 3).toFixed(2);
console.log("Average :", avg);
if (
  chemistry >= passingMarks &&
  physics >= passingMarks &&
  computer >= passingMarks
) {
  console.log("👍 You PASS.");
} else {
  console.log("👎 You FAIL.");
}
