// 8. Write a program to find the Sum of Array Elements (using command line argumnets)
const readLineSync = require("readline-sync");
var args = process.argv.slice(2);
var ch,a;
while(1){
    console.log("--------------WELCOME TO THE MENU------------------\n"); 
    console.log("ENTER CHOICE\n")
    console.log("1.To find the Sum of Array Elements\n2.To quit\n");
    ch = Number(readLineSync.question(": "));
     switch(ch){
         case 1: sum(args);
                 break;
         case 2: process.exit(0);
         default:console.log("ERROR!! Enter a valid choice\n\n");
     }

}
function sum(args) {
    var s = 0;
      for (let i = 0; i < args.length; i++) {
          args[i] = Number(args[i]);
          s += args[i];
      }
      console.log(s);
  }