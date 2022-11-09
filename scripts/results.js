//---------------------------------
// Your own functions here
//---------------------------------

function sayHello() {
    //do something
}
//sayHello();    //invoke function
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        document.getElementById('content').style.display='block';
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function findResult(){
    locations = ["alderaan", "jedha", "kamino", "coruscant", "naboo", "endor", "mustafar", "tatooine"];
    var data = localStorage.getItem("location");
    if (data==locations[0]){
        var answer = "yes";
    } else
        var answer = "no";

    move();
    //console.log(data);
    //console.log(answer);
    document.getElementById("answer-goes-here").innerHTML = data + ": " + answer;
}
findResult();



