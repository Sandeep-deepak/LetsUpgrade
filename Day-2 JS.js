//Question 1: Program to search for a particular character in a string.
let greet = "Hello World";
let result = greet.indexOf("l");
//Shows the index of first occurence of "l".
console.log(result); //2
// indexOf.("character/String",Start position)
console.log(greet.indexOf("l", 3)); //3
console.log(greet.indexOf("l", 4)); //9

//Question 2: Program to convert minutes to seconds.
let minutes = 12;
const seconds = 60;
let result1 = minutes * seconds ;
//Concatination
console.log(minutes + " mins is equal to " + result1 + " secs");
//Templating 
console.log(`${minutes} mins is equal to ${result1} secs`);
minutes = 15;
console.log(`${minutes} mins is equal to ${minutes * seconds} secs`);
minutes = 20;
console.log(`${minutes} mins is equal to ${minutes * seconds} secs`);

//Question 3: Program to search for a element in a array of strings.
let fruits = ["Apple", "Mango", "Orange", "Pineapple"];
console.log(fruits[1]); //Mango
console.log(fruits.includes("Apple")); //true

//Question 4: Program to display only elements containing 'a' in them from a array.
let names = ["Akhil", "Sandeep", "dileep", "chandu"];
    for(let i = 0; i< names.length; i++){
        let add = names[i].indexOf('a');
        if (add != -1){
            console.log(names[i]);
        }
    }
/*
                //Or
let names = ["Akhil", "Sandeep", "dileep", "chandu"];
for(let i = 0; i< names.length; i++){
    let add = names[i].search('a');
if (add >= 0){
    console.log(names[i]);
}}
                //Or
let names = ["Akhil", "Sandeep", "dileep", "chandu"];
    for(let i=0 ; i<names.length ; i++){
        if(names[i].includes("a")){
            console.log(names[i]);
        }
    }
*/

//Question 5: Print an array in reverse order.
let chars = ["A", "B", "C", "D"];
    for(let i=chars.length-1 ; i>=0 ; i--){
            console.log(chars[i]);
    }

//          //Or
// let nums = [0,1,2,3,4,5];
// let result2 = nums.reverse();
// console.log(result2);
//          //Or
// for(let i=5 ; i>=0 ; i--){
//     console.log(i);
// }
