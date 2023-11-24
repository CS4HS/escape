//---------------------------------
// Your own functions here
//---------------------------------
function runAlgo(){
    locations = ["alderaan", "jedha", "kamino", "coruscant", "naboo", "endor", "mustafar", "tatooine"];
    var data = document.getElementById("location").value;
    console.log(data);
    if (data.toLowerCase() == "fourteen"
      || (data == 14)
      ) {
      var answer = "yes";
      console.log(answer);
    } else {
      var answer = "no";
      console.log(answer);
    }
    localStorage.setItem("answer", answer);
}
