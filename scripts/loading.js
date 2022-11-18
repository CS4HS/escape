//---------------------------------
// Your own functions here
//---------------------------------

var i = 0; //global variable counter

function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 100);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        document.getElementById('content').style.display = 'block';
        i = 0;
        window.location.href="results.html"
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
move();

