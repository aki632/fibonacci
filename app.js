'use strict';
/*
function suu(n){
    let fib = 1;
    let fib2 = 0;
    let fib_1 =1;
    console.log(0);
    console.log(1);

    for (let i = 1; i <n; i++){
        fib_1 = fib
        fib = fib +fib2;
        fib2 = fib_1;
        console.log(fib , fib2 ,fib_1) ;
    }
}
console.log(suu(100));
*/

function fib(n){
    if (n===0){
        return 0;
    }
   else if (n===1){
       return 1;
   }
   return fib(n-1)+fib(n-2);
}

const length= 40;
for (let i=0; i<= length; i++){
    console.log(fib(i));
}