function triangleTracker() {

var a = parseInt(document.getElementById('a'));
var b = parseInt(document.getElementById('b'));
var c = parseInt(document.getElementById('c'));

var ab = a + b;
var bc= b + c;
var ca = c + a;
if(ab >c || bc >a || ca >b) {
alert("THIS IS NOT A TRIANGLE")
}
else if (a===b && b===c && c===a) {
alert("THIS IS AN EQUILATERAL TRIANGLE")
} else if(a===b || b===c || c===a){
alert("THIS IS AN ISOSCELES")
}
else  {
  alert ("This is a scalene triangle")
  }
}
