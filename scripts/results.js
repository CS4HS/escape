//---------------------------------
// Your own functions here
//---------------------------------

function showResults(){
  var result = localStorage.getItem("answer");
  if (result == "yes"){
    msg = "<h1> The Queen is here.</h1>"
    msg += "<br> <br> <img class='img-fluid' src='images/queen.png'>"
    document.getElementById("result-goes-here").innerHTML = msg;
  }
  else {
    msg = "<h1> The Queen is not here.</h1>"
    msg += "<br> <br> <img class='img-fluid' src='images/troopers.png'>"
    document.getElementById("result-goes-here").innerHTML = msg;
  }
}
showResults();
