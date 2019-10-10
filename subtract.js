// 4. Write a program to subtract two integers without using Minus (-) operator

const readLineSync = require('readline-sync');
var ch,a,b;
while(1){
    console.log("--------------WELCOME TO THE MENU------------------\n"); 
    console.log("ENTER CHOICE\n")
    console.log("1.To subtract two integers without using Minus (-) operator\n2.To quit\n");
    ch = Number(readLineSync.question(": "));
     switch(ch){
         case 1: a = Number(readLineSync.question("Enter number, n1: "));
                 b = Number(readLineSync.question("Enter number, n2: "));
                 subtract(a,b);
                 break;
         case 2: process.exit(0);
         default:console.log("ERROR!! Enter a valid choice\n\n");
     }

}

function subtract(a,b){
var result = a+~b+1;
console.log(result);
}