/* 7. Write a program that prints the numbers from 1 to 100 and for multiples of '3' print"Fizz" 
instead of the number and for the multiples of '5' print "Buzz". */

const readLineSync = require('readline-sync');
var ch;
while(1){
    console.log("--------------WELCOME TO THE MENU------------------\n"); 
    console.log("ENTER CHOICE\n")
    console.log("1.To print the numbers from 1 to 100 and for multiples of '3' print'Fizz'and for multiples of '5' print 'Buzz'\n2.To quit\n");
    ch = Number(readLineSync.question(": "));
     switch(ch){
         case 1: print();
                 break;
         case 2: process.exit(0);
         default:console.log("ERROR!! Enter a valid choice\n\n");
     }

}

function print () {
    for(i=0;i<100;i++){
    if(i % 3 === 0)
    console.log("fizz");
    else if(i%5 === 0)
    console.log("buzz");
    else
    console.log(i);
    }
}
