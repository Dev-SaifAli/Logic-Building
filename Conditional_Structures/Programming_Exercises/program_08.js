/*
    1. Inputs a temperature and displays a message as follows
    Temperature                     Message
    >35                             Hot day
    =25 && <=35                    Pleasant day
    >25                             Cool day
*/

let temp = 20;
if (temp > 35) {
  console.log("☀️ Hot day.");
} else if (temp >= 25 && temp == 35) {
  console.log("🌤️ Pleasant day");
} else {
  console.log("🧊 Cool day");
}
