// 10) Write a program to check whether given character is a vowel or consonant

const readLineSync = require('readline-sync');
var ch,a;
while(1){
    console.log("--------------WELCOME TO THE MENU------------------\n"); 
    console.log("ENTER CHOICE\n")
    console.log("1.To check whether given character is a vowel or consonant\n2.To quit\n");
    ch = Number(readLineSync.question(": "));
     switch(ch){
         case 1: a = readLineSync.question("Enter an alphabet: ");
                 alphabets(a);
                 break;
         case 2: process.exit(0);
         default:console.log("ERROR!! Enter a valid choice\n\n");
     }

}

function alphabets(a){
    if(a == Number(a)){
      console.log("Invalid!! "+a+" is not an alphabet");
    }
    else if(a == 'a' || a== 'e' || a == 'i' || a== 'o' || a== 'u') {
       console.log(a + " " + "is" + " " + "a" + " " +"vowel");
    }
    else {
        console.log(a + " " + "is" + " " + "a" + " "+  "consonant");
    }
}




