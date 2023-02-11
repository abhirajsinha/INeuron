
getX();
getF();

function getX() {
  var x = 7;
  function getY() {
    console.log(x);
  }
  x=70;
  getY();
  return getY;
}

var getF = function(){
    console.log("Hii from F");
}