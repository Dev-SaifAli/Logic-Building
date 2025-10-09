//------------ do...while loop ------------
/*     Displays back-counting from 10 to 1     */

{
  let c;
  c = 10;
  do {
    console.log(c);
    c = c - 1;
  } while (c >= 1);
}

/*     First number raise to the power of second number     */

{
  let a = 2;
  let b = 1;
  let c = 8; // raise to the power
  let r=1;
  do {
    r = r * a; 
    b = b + 1; 
  } while (b <= c); 
  {
    console.log("Result is ", r);
  }
}
