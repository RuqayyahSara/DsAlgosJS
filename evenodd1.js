// 2. Generate even and odd numbers till 'N' and generate 'n' even and odd numbers

var readLineSync = require('readline-sync');
var ch,n;
while(1){
    console.log("--------------WELCOME TO THE MENU------------------\n"); 
    console.log("ENTER CHOICE\n")
    console.log("1.To generate Even and Odd Numbers less than N \n2.To display 'n' even numbers\n3.To display 'n' odd numbers\n4.To quit\n");
     ch = Number(readLineSync.question(": "));
     switch(ch){
         case 1: n = Number(readLineSync.question("Enter N: "));  
                 Range(n);
                 break;
         case 2: n = Number(readLineSync.question("Enter n: "));
                 even(n);
                 break;
         case 3: n = Number(readLineSync.question("Enter n: "));
                 odd(n);
                 break;
         case 4: process.exit(0);
         default:console.log("ERROR!! Enter a valid choice\n\n");
     }

}
function Range(n){
    for(let i = 0; i < n; i++) {
        if(i === 0){
            console.log(i + " " + "is neither even nor odd.");
        }
        else if (i % 2 === 0) {
            console.log(i + " " + "is an even number");
        }
        else {
            console.log(i + " " + "is an odd number.");
        }
    }
}

function even(n){
    var e=2;;
    for (let i = 1; i<=n; i++){
            console.log(e);
            e = e+2;
    }
}

function odd(n){
    var o=1;
    for (let i = 1; i<=n; i++){
            console.log(o);
            o+=2;
    }
}