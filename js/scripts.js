function triangleTracker() {
var a = parseInt(document.getElementById('a'));
var b = parseInt(document.getElementById('b'));
var c = parseInt(document.getElementById('c'));

if (a===b && b===c && c===a) {
alert("THIS IS AN EQUILATERAL TRIANGLE")
} else if(a===b || b===c || c===a) {
alert("THIS IS AN ISOSCELES")
} else if(a+b <=c || b+c<=a || a+c<=b) {
alert("THIS IS NOT A TRIANGLE")
}else /*if (a!==b && b!==c && c!==a)*/ {
  alert ("This is a scalene triangle")
}};
