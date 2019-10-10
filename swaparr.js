// 9) Write a  program for swapping of two arrays

const readLineSync = require("readline-sync");
var n= Number(readLineSync.question("Enter n from 3-10: "));
var args = process.argv.slice(2,n);
var arg = process.argv.slice(n);
var ch,a;
while(1){
    console.log("--------------WELCOME TO THE MENU------------------\n"); 
    console.log("ENTER CHOICE\n")
    console.log("1.To swap two arrays\n2.To quit\n");
    ch = Number(readLineSync.question(": "));
     switch(ch){
         case 1: swap(args,arg);
                 break;
         case 2: process.exit(0);
         default:console.log("ERROR!! Enter a valid choice\n\n");
     }

}
function swap(args,arg){
    console.log("The 2 arrays are \n");
    console.log(args);
    console.log(arg);
var c;
c=args;
args = arg;
arg=c;
console.log("The 2 arrays after swapping are\n");
console.log(args);
console.log(arg);
}