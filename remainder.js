// 5. Write a program to find remainder of two numbers without using modulus (%) operator

const readLineSync = require('readline-sync');
var ch,a,b;
while(1){
    console.log("--------------WELCOME TO THE MENU------------------\n"); 
    console.log("ENTER CHOICE\n")
    console.log("1.To find remainder of two numbers without using modulus (%) operator\n2.To quit\n");
    ch = Number(readLineSync.question(": "));
     switch(ch){
         case 1: a = Number(readLineSync.question("Enter number, n1: "));
                 b = Number(readLineSync.question("Enter number, n2: "));
                 rem(a,b);
                 break;
         case 2: process.exit(0);
         default:console.log("ERROR!! Enter a valid choice\n\n");
     }

}
function rem(a,b) { 
    var product,quotient, remainder;
    quotient = a / b;
    quotient = Math.floor(quotient);
    product = quotient * b;

    remainder = a - product ;
    console.log(remainder);
}
