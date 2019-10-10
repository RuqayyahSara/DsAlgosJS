// 3) Program to check whether n is prime or not
const readLineSync = require('readline-sync');
var ch,n;
while(1){
    console.log("--------------WELCOME TO THE MENU------------------\n"); 
    console.log("ENTER CHOICE\n")
    console.log("1.To check whether a number is prime or not\n2.To quit\n");
    ch = Number(readLineSync.question(": "));
     switch(ch){
         case 1: n = Number(readLineSync.question("Enter a number: "));  
                 Prime(n);
                 break;
         case 2: process.exit(0);
         default:console.log("ERROR!! Enter a valid choice\n\n");
     }

}

function Prime(n) {
    var flag = 0;
    for(let i=2; i<n/2; i++){
        if(n % i === 0){
            flag = 1;
            break;
        }
    }
   if(n===1)
   console.log("1 is neither prime nor composite");
   if(flag === 0)
   console.log(n + " " + "is a prime number");
   else
   console.log(n + " " + "is not a prime number");
}
