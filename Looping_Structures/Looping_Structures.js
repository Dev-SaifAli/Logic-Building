// //------------ do...while loop ------------
// /*     Displays back-counting from 10 to 1     */

// // {
// //   let c;
// //   c = 10;
// //   do {
// //     console.log(c);
// //     c = c - 1;
// //   } while (c >= 1);
// // }

// /*     First number raise to the power of second number     */

// // {
// //   let a = 2;
// //   let b = 1;
// //   let c = 8; // raise to the power
// //   let r = 1;
// //   do {
// //     r = r * a;
// //     b = b + 1;
// //   } while (b <= c);
// //   {
// //     console.log("Result is ", r);
// //   }
// // }

// /*
//   1. inputs 2 numbers from the user ✅
//   2. display product ✅
//   3. asks the user to continue or not
//   4. if user enters 'y' then program input two numbers again and exits if enter 'n'
// */

// // {
// //   let a = 5;
// //   let b = 8;
// //   let op;
// //   let prod;
// //   do {
// //     console.log("Two numbers: ", a, b);
// //     // prod = a * b;
// //     console.log("Product of the numbers: ", prod);
// //     // op = prompt("Do you want to continue? (y/n)");
// //     console.log(op);
// //   } while (op != "n");
// //   {
// //     console.log("Press any key to exit...");
// //   }
// // }

// /*     Check if the number is palindrome
//   A number is palindrome that reads the same backwards as well as forward
//   e.g; 62526 , 4994
// */

// // {
// //   let num = 4994;
// //   let n = 4994;
// //   let digit = 0;
// //   let rev = 0;
// //   do {
// //     digit = num % 10; // 4
// //     rev = rev * 10 + digit; // 4
// //     num = Math.floor(num / 10); //
// //     console.log(digit, rev, num);
// //   } while (num != 0);
// //   console.log("The reverse of the number is: ", rev);
// //   if (n == rev) {
// //     console.log("The number is a palindrome");
// //   } else {
// //     console.log("The number is not a palindrome");
// //   }
// // }

// /*     Gets starting and ending point from user.
//   Displays all odd numbers in the given range using do...while loop
// */

// let s = 2;
// let e = 20;
// let c;
// c = s;
// do {
//   if (c % 2 != 0) console.log(c);
//   c = c + 1;
// } while (c <= e);

// /*     Gets starting and ending point from user.
//   Displays all odd numbers in the given range using do...while loop
// */
// {
//   let a = 2;
//   let b = 20;
//   do {
//     if (a % 2 != 0) {
//       console.log(a);
//     }
//     a = a + 1;
//   } while (a <= b);
// }

// /*     Finds the Least Common Multiple of two given numbers.
//  */

// {
//   let num1 = 4;
//   let num2 = 6;
//   let multiple = num2;
//   do {
//     multiple = multiple + 1;
//     console.log(multiple);
//   } while (multiple % num1 != 0 && multiple % num2 != 0);
// }
function solution(str, ending) {
  // TODO: complete
  let condition = str.includes(ending);
  if (condition == true) {
    console.log("true");
  } else {
    console.log("false");
  }
}
solution("abc", "bc");
function greeting(parameterVariable) {
  // This line prints 'Hello, World!' to the console:
  console.log("Hello, World!");

  // Write a line of code that prints parameterVariable to stdout using console.log:
  console.log(parameterVariable);
}
// greeting("\nWelcome to 10 Days of JavaScript!");

// Find the Least Common Multiple Multiple of 2 numbers using do...while

{
  var a = 4;
  var b = 10;
  var max;
  var lcm;
  if (a >= b) {
    max = a;
  } else {
    max = b;
  }
  do {
    if (max % a == 0 && max % b == 0) {
      lcm = max;
      break;
    } else {
      max++;
    }
  } while (true);
  console.log("LCM: ", lcm);
}

// "for loop"

// Print all odd numbers from 1 to 10.
let x;
let product = 1;
for (x = 1; x <= 10; x++) {
  if (x % 2 != 0) {
    // product = product * x;
    product *= x;
    console.log("Result is: " + product);
  }
}

// inputs table number and length of table and then displays the table using for loop.

let t = 5;
let l = 10;
let n;
let m;
for (n = 1; n <= 10; n++) {
  m = t * n;
  console.log(`${t} * ${n} = ${m}`);
}

// console.log("2 + 3");

