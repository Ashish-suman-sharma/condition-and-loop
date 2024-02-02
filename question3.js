/* Loops are used for executing a block of code repeatedly. Common types 
are for, while, and do-while. Here is the syntax: */

//for loop
for (initialization; condition; update) {
   
}

//while loop
while (condition) {
    
}

//examples

const num1 = 10;
const num2 = 25;

for (let i = num1; i <= num2; i++) {
    console.log(i);
}


let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}