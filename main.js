// Javascript loops

// Loops can execute a block of code a number of times

// Different kind of loops
// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

// for loop
// syntax

// for(expression1;expression2;expression3){
//     code block to be executed
// }
console.log('for loop');
const colors=['red','orange','yellow','green','white','blue',]
for(i=0;i<colors.length;i++){
    console.log(colors[i]);
}