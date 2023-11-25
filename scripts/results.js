//---------------------------------
// Your own functions here
//---------------------------------

function showResults(){
  var result = localStorage.getItem("answer");
  if (result == "yes"){
    msg = "<h1> You got it. </h1> <h1> Your clue: 'Go to the cross'.</h1>"
    msg += "<br> <br> <img class='img-fluid' src='images/yes.jpg'>"
    document.getElementById("result-goes-here").innerHTML = msg;
  }
  else {
    msg = "<h1> Please try again.</h1>"
    msg += "<br> <br> <img class='img-fluid' src='images/no.jpg'>"
    msg += "<br> <a href='./index.html'>Take me back to the storm ...</a>"
    document.getElementById("result-goes-here").innerHTML = msg;
  }
}
showResults();
