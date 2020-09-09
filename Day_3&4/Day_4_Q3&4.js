//Question 3:
let people = [{name:"Sandeep", age:25, country:"India", hobbies:["Traveling","Games","Programming"]},
            {name:"Harley", age:42, country:"India", hobbies:["Sketching","Cooking","Blogging"]},
            {name:"Atlas", age:30, country:"India", hobbies:["listening music","Baking","Graphic Design"]},
            {name:"John", age:15, country:"America", hobbies:["Cooking","Painting","Catering"]},
            ];
// console.log(people); //Gives Array of Objects

// people.forEach(function(persons){
//     console.log(persons);
// });
// //Arrow function:
// people.forEach(persons = (per) => {console.log(per)});
function display(){
    console.log("Objects in Array");
    people.forEach(persons => {console.log(persons)});
}
display();


//Question 4:

function ages(){
    console.log("People with age less than 30");
    for(let i=0; i<people.length; i++){
        if(people[i].age < 30){
            console.log(people[i]);
        }
    }
}
ages();

function peoples_Country(){
    console.log("People lives in India");
    for(let i=0; i<people.length; i++){
        if(people[i].country == "India"){
            console.log(people[i]);
        }
    }
}
peoples_Country();
