/*
    1. Inputs obtained marks
    2. Calculate percentage
    3. Assuming total_marks=1100;
    4. Displays grade   according to the following rules:

    Percentage               Grade
    >=80                      A+
    >=70                      A
    >=60                      B
    >=50                      C
    >=40                      D
    >=33                      E
    <33                       F
*/

let obtained_marks = 900;
let percentage;
let total_marks = 1100;
let grade;
// percentage = (934 / 1000) * 100;
percentage = 20;
console.log(percentage);

if (percentage >= 80) {
  grade = "A+";
} else if (percentage >= 70) {
  grade = "A";
} else if (percentage >= 60) {
  grade = "B";
} else if (percentage >= 50) {
  grade = "C";
} else if (percentage >= 40) {
  grade = "D";
} else if (percentage >= 33) {
  grade = "E";
} else {
  grade = "F";
}

console.log("grade:", grade);
