// Conditional Structures

let marks = 30;
if (marks >= 40) {
  console.log("Congratulations! You have passed.");
}

// ----------------------------------
{
  let num1 = 20;
  let num2 = 20;
  if (num1 == num2) {
    console.log("Both numbers are equal.");
  }
}
// ----------------------------------

{
  let a = 4;
  let b = 8;
  if (a * a == b) {
    console.log("2nd number is square of 1st number");
  }
}
// ----------------------------------

{
  let Math = 85;
  let Physics = 90;
  let Chemistry = 80;
  let avg = (Math + Physics + Chemistry) / 3;
  if (avg > 80) {
    console.log("You are above Standard", "Admission granted");
  }
}
// ----------------------------------

{
  let a = 100;
  let b = 100;
  let c = 100;
  let max;
  if (a > b) {
    if (a > c) {
      max = a;
    } else {
      max = c;
    }
  } else {
    max = b;
  }

  console.log("The maximum number is:", max);
}
// ----------------------------------

{
  let num = -0.2;
  if (num > 0) {
    console.log("The number is positive.");
  }
  if (num < 0) {
    console.log("The number is negative.");
  }
  if (num == 0) {
    console.log("The number is zero.");
  }
}
// ---------- Largest and Smallest Number ------------------------

{
  let a = 10;
  let b = 15;
  let c = 20;
  let d = 25;
  let e = 30;
  let max;
  let min;
  min = max = a;
  if (b < min) {
    min = b;
  }
  if (c < min) {
    min = c;
  }
  if (d < min) {
    min = d;
  }
  if (e < min) {
    min = e;
  }

  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  if (d > max) {
    max = d;
  }
  if (e > max) {
    max = e;
  }

  console.log("Largest number is:", max);
  console.log("Smallest number is:", min);
}

// ---------- if...else Statements ------------------------

// ---------- Finds Even or Odd ? ------------------------

{
  let num = 21;
  if (num % 2 == 0) {
    console.log(`${num} is even.`);
  } else {
    console.log(`${num} is odd.`);
  }
}

// ---------- Finds Leap year ? ------------------------

{
  let y = 2025;
  if (y % 4 == 0) {
    console.log(`${y} is a leap year.`);
  } else {
    console.log(`${y} is not a leap year.`);
  }
}

// ----------------------------------

{
  let salary = 30000;
  let grade = 17;
  let bonus;
  if (grade > 15) {
    bonus = (salary * 50) / 100;

    // salary = bonus + salary;
  }
  //   if (grade <= 15) {
  //     bonus = salary * (25 / 100);
  //     salary = bonus + salary;
  //   }
  else {
    bonus = (salary * 25) / 100;
  }

  console.log(`Your total salary is Rs. ${salary + bonus}`);
}

// -------- Determines if the first integer is multiple of second integer--------------------------

{
  let a = 85;
  let b = 4;
  if (a % b == 0) {
    console.log("The first number is a multiple of second.");
  } else {
    console.log("The first number is not a multiple of second");
  }
}

// --------------- if...else...if Statements ---------------
// -------- Inputs the test score and displays grade --------
{
  let score = 90;
  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log(`Your grade is ${grade}.`);
}

// -------- Calculates the electricity bill --------

{
  let units = 300;
  let cost;
  let line_rent = 150;
  let total_bill;

  if (units <= 300) {
    cost = 2 * units;
  } else if (units > 300 && units <= 500) {
    cost = 5 * units;
  } else {
    cost = 7 * units;
  }

  total_bill = cost + line_rent;
  if (total_bill > 2000) {
    total_bill = total_bill + (total_bill * 5) / 100;
  }

  console.log(`Total bill = ${total_bill}`);
}

// -------- Calculation on user's choice --------

{
  let r = 44;
  let user_choice = 2;
  let area; // pi*r*r
  let circumference; // 2*pi*r
  if (user_choice == 1) {
    area = 3.14 * r * r;
    area.toFixed(2);
    console.log(`Area: ${area}`);
  } else if (user_choice == 2) {
    circumference = 2 * 3.14 * r;
    circumference.toFixed(2);
    console.log(`Circumference: ${circumference}`);
  } else {
    console.log("Invalid choice.");
  }
}

// -------- Salary Calculation  --------

{
  let salary = 8000;
  let net;
  if (salary >= 20000) {
    net = salary - (salary * 7) / 100;
  } else if (salary >= 10000 && salary < 20000) {
    net = salary - 1000;
  } else {
    net = salary;
  }
  console.log(`Net Salary: ${net}.`);
}

// -------- Monthly Telephone Bill Calculation  --------

{
  let calls = 250;
  let min = 200;
  let bill;
  if (calls <= 100) {
    bill = min;
  } else if (calls <= 150) {
    bill = min + (calls - 100) * 0.6;
  } else if (calls <= 200) {
    bill = min + 50 * 0.6 + (calls - 150) * 0.5;
  } else {
    bill = min + 50 * 0.6 + 50 * 0.5 + (calls - 200) * 0.4;
  }
  console.log(`Total bill: ${bill}`);
}

// -------- Nested if Statement  --------

{
  let a = 10;
  let b = 5;
  let c = 2;
  let small_num;
  if (a < b) {
    if (a < c) {
      small_num = a;
    } else {
      small_num = c;
    }
  } else if (b < c) {
    small_num = b;
  } else {
    small_num = c;
  }

  console.log(`Smallest number is : ${small_num}.`);
}

// ------------------------------------------------

// -------- Compound Conditions  --------
// -------- Logical Operators (&&) --------

{
  let a = 10;
  let b = 20;
  let c = 30;
  let max;
  if (a > b && a > c) {
    max = a;
  } else if (b > c && b > a) {
    max = b;
  } else {
    max = c;
  }
  console.log("Maximum number is:", max);
}

// -------- Logical Operators (||) --------

{
  let ch = "c";
  if (
    ch == "A" ||
    ch == "a" ||
    ch == "E" ||
    ch == "e" ||
    ch == "I" ||
    ch == "i" ||
    ch == "O" ||
    ch == "o" ||
    ch == "U" ||
    ch == "u"
  ) {
    console.log(`You entered a vowel : ${ch}`);
  } else {
    console.log(`You did not entered a vowel : ${ch}`);
  }
}

// -------- Displays the number of days of the corresponding month --------

{
  let m = 20;

  if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
    console.log("31 days");
  } else if (m == 4 || m == 6 || m == 9 || m == 11) {
    console.log("30 days");
  } else if (m == 2) {
    console.log("28 or 29 days");
  } else {
    console.log("Invalid month");
  }
}

// -------- Determines which letter is entered --------

{
  let ch = "@";
  if (ch >= "A" && ch <= "Z") {
    console.log(`The character ${ch} is a capital letter.`);
  } else if (ch >= "a" && ch <= "z") {
    console.log(`The character ${ch} is a small case letter.`);
  } else if (ch >= "0" && ch <= "9") {
    console.log(`The character ${ch} is a digit.`);
  } else {
    console.log(`The character ${ch} is a symbol.`);
  }
}

// -------- Determines THE NUMBER IS EVEN OR ODD USING NOT ! OPERATOR --------

{
  let number = 25;
  if (!(number % 2 == 0)) {
    console.log("You entered odd number");
  } else {
    console.log("You entered even number");
  }
}

// -------- POSSIBLE COMBINATIONS --------

{
  let a = 1;
  let b = 2;
  let c = 2;
  if (a != b && b != c && c != a) {
    console.log("" + a + b + c);
    console.log("" + a + c + b);
    console.log("" + b + a + c);
    console.log("" + c + a + b);
    console.log("" + c + b + a);
  } else {
    if (a == b && a == c) {
      console.log("" + a + b + c);
    } else {
      if (a == b) {
        console.log("" + a + b + c);
        console.log("" + a + c + b);
        console.log("" + c + b + a);
      } else {
        if (a == c) {
          console.log("" + a + b + c);
          console.log("" + a + c + b);
          console.log("" + b + a + c);
        } else {
          console.log("" + a + b + c);
          console.log("" + b + a + c);
          console.log("" + b + c + a);
        }
      }
    }
  }
}

// -------- switch Statement --------
// -------- Inputs the week's day number and displays the name of the day --------

{
  let weekDayNumber = 1;
  switch (weekDayNumber) {
    case 1: {
      console.log("Monday");
      break;
    }
    case 2: {
      console.log("Tuesday");
      break;
    }
    case 3: {
      console.log("Wednesday");
      break;
    }
    case 4: {
      console.log("Thursday");
      break;
    }
    case 5: {
      console.log("Friday");
      break;
    }
    case 6: {
      console.log("Saturday");
      break;
    }
    case 7: {
      console.log("Sunday");
      break;
    }
    default: {
      console.log("Invalid number");
    }
  }
}

// -------- Ternary operator --------

// Syntax: condition ? expression 1 : expression 2

{
  let A = 60;
  x = A > 50 ? 1 : 0;
  console.log(x);
}

// --------------------------------

{
  let result;
  let marks = 40;
  result = marks > 40 ? "Pass" : "Fail";
  console.log("Result is ", result);

  console.log(`Result is ${(result = marks >= 40 ? "Pass" : "Fail")}`);
}

// --------------------------------

{
  let number = 6;
  let display;
  console.log(
    `The number ${number} is ${(display =
      number % 3 == 0 ? "divisible by 3" : "not divisible")}`
  );

  (number % 3) == 0
    ? console.log("Divisible by 3")
    : console.log("Not divisible by 3");
}

// --------------------------------

{
  let i = 80;
  (i%2==0?console.log(`Even`): console.log(`Odd`))
}