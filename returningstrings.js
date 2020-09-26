//Returning Strings
//https://www.codewars.com/kata/55a70521798b14d4750000a4
/*
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
  //your code here
}

describe("Basic tests",_=>{
  Test.assertEquals(greet("Ryan"), "Hello, Ryan how are you doing today?");
  Test.assertEquals(greet("Shingles"), "Hello, Shingles how are you doing today?");
})
*/

function greet(name) {
    return "Hello, " + name + " how are you doing today?";
}

console.log(greet("Ryan"));