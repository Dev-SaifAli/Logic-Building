/*
    1. Accepts code number and display the correct disk drive manufacture
    Code                      Disk Drive Manufacture
     1                          Western Digital
     2                          3M Corporation
     3                          Maxell Corporation
     4                          Sony Corporation
     5                          Verbatim Corporation

*/

let code = 3;
switch (code) {
  case 1: {
    console.log("Western Digital");
    break;
  }
  case 2: {
    console.log("3M Corporation");
    break;
  }
  case 3: {
    console.log("Maxell Corporation");
    break;
  }
  case 4: {
    console.log("Sony Corporation");
    break;
  }
  case 5: {
    console.log("Verbatim Corporation");
    break;
  }
  default: {
    console.log("❌ Invalid code number.");
  }
}
