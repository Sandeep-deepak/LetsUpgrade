let clients = [
    {name:"Sandeep", age: 24, city:"Vizag", salary: "3.12 L"},
    {name:"Chandu", age: 20, city:"Hyderabad", salary: "1.8 L"},
    {name:"Dileep", age: 23, city:"Chennai", salary: "2.8 L"},
    {name:"Ganga", age: 30, city:"Bangalore", salary: "3.8 L"},
    {name:"Kishore", age: 28, city:"Mumbai", salary: "3.6 L"},
];

// Display Function
function display(superArray) {
    let tabledata = ""; //emptying data when calling the func

    superArray.forEach(function(client ,index){
        let currentrow = `<tr>
        <td>${index + 1}</td> 
        <td>${client.name}</td>
        <td>${client.age}</td>
        <td>${client.city}</td>
        <td>${client.salary}</td>
        <td><button onclick = "deleteClient(${index})">Delete</button></td>
        </tr>`;
        tabledata += currentrow;
    });
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata; //class gives array
}

display(clients);

// Search Function
function searchByName_City(){
    let searchValue = document.getElementById("searchName").value;
    
    let newData = clients.filter(function(client){
        let nameValue = client.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
        let cityValue = client.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
        return nameValue || cityValue; 
    });
    
    display(newData);
}

// Delete Function
function deleteClient(index){
    clients.splice(index,1);
    display(clients);
}
