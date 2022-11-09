//---------------------------------
// Your own functions here
//---------------------------------

function sayHello() {
    //do something
}
//sayHello();    //invoke function

function runAlgo(){
    locations = ["alderaan", "jedha", "kamino", "coruscant", "naboo", "endor", "mustafar", "tatooine"];
    var data = document.getElementById("location").value;
    console.log(data);
    alert(data);
    localStorage.setItem("location", data);
}
