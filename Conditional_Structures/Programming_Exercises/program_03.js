/*
1.  Get three numbers from user a,b,c.
2.  if a is not equal to zero - find out :
whether a is the common divisor of b and c
 */

let a = 0;
b = 20;
c = 30;
if (a != 0) {
  if (b % a == 0 && c % a == 0) {
    console.log(`${a} is the common divisor of b and c.`);
  }
} else {
  console.log("a is zero.");
}
