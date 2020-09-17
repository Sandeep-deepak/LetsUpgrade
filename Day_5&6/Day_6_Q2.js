window.onload = function () {
  let initialBuses = [
    // {name: "Big Bus", source: "mumbai", destination: "hyderabad", number: 5842, capacity: 42},
    // {name: "Yatra", source: "hyderabad", destination: "bangalore", number: 4298, capacity: 34},
    // {name: "Kaveri", source: "chennai", destination: "vizag", number: 6539, capacity: 32},
    // {name: "Morning Star", source: "vizag", destination: "chennai", number: 8947, capacity: 36},
    // {name: "Go Tour", source: "delhi", destination: "mumbai", number: 3588, capacity: 21},
  ];
  if (localStorage.getItem("buses") == null){
    localStorage.setItem("buses", JSON.stringify(initialBuses));
  }
};
    
//Display function
function display(superarray = undefined) {
  let tabledata = "";
  let buses;
  if (superarray == undefined) {
    buses = JSON.parse(localStorage.getItem("buses"));
  } 
  else {
    buses = superarray;
  }
  
  buses.forEach(function(bus, index) {
    let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${bus.name}</td>
      <td>${bus.source}</td>
      <td>${bus.destination}</td>
      <td>${bus.number}</td>
      <td>${bus.capacity}</td>
      <td>
      <button onclick='deleteSuperhero(${index})'>delete</button>
      </td>
      </tr>`;
  
    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}
  
display();

//Add Bus function
function addBus(e) {
  e.preventDefault();
  let bus = {};

  let name = document.getElementById("name").value;
  let source = document.getElementById("source").value;
  let destination = document.getElementById("destination").value;
  let number = document.getElementById("number").value;
  let capacity = document.getElementById("capacity").value;
  bus.name = name;
  bus.source = source;
  bus.destination = destination;
  bus.number = Number(number);
  bus.capacity = Number(capacity);
    
  let buses = JSON.parse(localStorage.getItem("buses"));
  buses.push(bus);
  localStorage.setItem("buses", JSON.stringify(buses));

  display();

  document.getElementById("name").value = "";
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("number").value = "";
  document.getElementById("capacity").value = "";
}

// Search Function
function searchBySrc(){
  let searchValue = document.getElementById("search_Src").value;
  let searchBuses = JSON.parse(localStorage.getItem("buses"));
  let newData = searchBuses.filter(function(bus){ 
    return (bus.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1);
  });

  display(newData);
}

function searchByDes(){
  let searchValue1 = document.getElementById("search_Des").value;
  let searchBuses = JSON.parse(localStorage.getItem("buses"));
  let newData1 = searchBuses.filter(function(bus){ 
    return (bus.destination.toUpperCase().indexOf(searchValue1.toUpperCase()) != -1);
  });

  display(newData1);
}

// Delete Function
function deleteSuperhero(index) {
  let buses = JSON.parse(localStorage.getItem("buses"));
  buses.splice(index, 1);
  localStorage.setItem("buses", JSON.stringify(buses));
  display();
}

