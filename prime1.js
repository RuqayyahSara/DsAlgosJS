// 6. Write a program to generate Prime  Numbers less than N and Generate ‘N’ PrimeNumbers/in given range

const readLineSync = require('readline-sync');
var ch,n;
while(1){
    console.log("--------------WELCOME TO THE MENU------------------\n"); 
    console.log("ENTER CHOICE\n")
    console.log("1.To generate Prime  Numbers less than N\n2.To generate ‘N’ PrimeNumbers/in given range\n3.To quit\n");
    ch = Number(readLineSync.question(": "));
     switch(ch){
         case 1: n = Number(readLineSync.question("Enter number, N: "));  
                 Prime(n);
                 break;
         case 2: m = Number(readLineSync.question("Enter Range, m: ")); 
                 n = Number(readLineSync.question("n: ")); 
                 Range(m,n);
                 break;
         case 3: process.exit(0);
         default:console.log("ERROR!! Enter a valid choice\n\n");
     }

}
function Prime(n){
    var num,i,count;
        for(num = 1;num<=n;num++){
             count = 0;
             for(i=2;i<=num/2;i++){
                 if(num%i==0){
                     count++;
                     break;
                 }
            }
             if(count==0 && num!= 1)
                 console.log(num);
        }
    }

 function Range(m,n){
     var num,i,count;
         for(num = m;num<=n;num++){
             count = 0;
             for(i=2;i<=num/2;i++){
                 if(num%i==0){
                     count++;
                     break;
                 }
            }
             if(count==0 && num!= 1)
                 console.log(num);
        }
    }