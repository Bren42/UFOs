//printing in the javascript console, remember print in JS will try to send to a physical printer, plus use // to comment out code
console.log("Hello World");


//convert to a arrow function

/// original code
// function addition(a,b){
//     return a+b;}

//arrow function
addition = (a,b) => a + b;

addition(5,50);
console.log(addition(5,50));

//functions to call other functions

/// Original doubleAddition function
// function doubleAddition(c, d) {
//   var total = addition(c, d) * 2;
//   return total;
// }
doubleAddition =(c,d) => addition(c,d) * 2;
console.log(doubleAddition(33,25));

let friends = ["sarah","greg","cindy","jeff"];

console.log(friends);

function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
        console.log(userList[i]);
    }}

listLoop(friends);

//Practice for loops
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var veg = 0; veg < vegetables.length; veg++){
    console.log("I love" + vegetables[veg]);
}

//loop through numbers without an array

for (var i = 1; i < 11; i++){
    console.log("I am " +i);
}

// foreach method
let numbers =[1,2,3,4,5,6];
numbers.forEach(function (element){
    console.log(element**2);
})