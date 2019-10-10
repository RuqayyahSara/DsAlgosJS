// 1) Program to check if all the numbers are even or odd

var readLineSync = require('readline-sync');
var ch,n;
while(1){
    console.log("--------------WELCOME TO THE MENU------------------\n"); 
    console.log("ENTER CHOICE\n")
    console.log("1.To check whether a number is even or odd\n2.To quit\n");
    ch = Number(readLineSync.question(": "));
     switch(ch){
         case 1: n = Number(readLineSync.question("Enter a number: "));  
                 EvenOdd(n);
                 break;
         case 2: process.exit(0);
         default:console.log("ERROR!! Enter a valid choice\n\n");
     }

}

function EvenOdd(n) {
    if(n <= 0){
        console.log(n + " " + "is neither even nor odd.\n\n");
    }
    else if (n % 2 === 0) {
        console.log(n + " " + "is an even number\n\n");
    }
    else {
        console.log(n + " " + "is an odd number.\n\n");
    }
}
