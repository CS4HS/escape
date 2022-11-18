//---------------------------------
// Your own functions here
//---------------------------------

function showResults(){
  var result = localStorage.getItem("answer");
  if (result == "yes"){
    msg = "The Queen is here."
    msg += "<br> <br> <img src= images/queen.png>"
    document.getElementById("result-goes-here").innerHTML = msg;
  }
  else {
    msg = "The Queen is not here."
    msg += "<br> <br> <img src= images/troopers.png>"
    document.getElementById("result-goes-here").innerHTML = msg;
  }
}
showResults();
