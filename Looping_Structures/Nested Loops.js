for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`Outer: ${i} Inner: ${j}`);
  }
}

/* Program 01: Displays the product components of a number
without repeating them. 
For example: if user enters 24, it displays 24*1, 12*2, 8*3 and 4*6;
*/

function showOutput() {
  let n = parseInt(document.getElementById("number").value);
  if (isNaN(n) || n <= 0) {
    document.getElementById("output").innerText =
      "Please enter a positive whole number";
    return;
  }
  let s = 1;
  let results = "";
  for (let i = n; i >= s; i--) {
    for (let j = 1; j <= n; j++) {
      if (i * j == n) {
        results += `${i} * ${j} <br>`;
        s = j + 1;
      }
    }
  }
  document.getElementById("output").innerHTML = results;
}

/*Program 02:
1=1
1+2=3
1+2+3=6
1+2+3+4=10
1+2+3+4+5=15*/
console.log("\n");
let max = 5;
let sum = 0;
for (let n = 1; n <= max; n++) {
  sum += n;
  //   console.log(sum);
  // build the left side string
  let parts = [];
  for (let i = 1; i <= n; i++) {
    parts.push(i);
    // console.log(parts);
}
console.log(parts.join("+") + " = " + sum);
}
