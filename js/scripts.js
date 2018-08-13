function triangleTracker() {
var a = parseInt(document.getElementById('a').value);
var b = parseInt(document.getElementById('b').value);
var c = parseInt(document.getElementById('c').value);

if(a+b <c || b+c<a || a+c<b) {
alert("This is NOT a triangle")
}
else if (a===b && b===c && c===a) {
alert("This is an Equilateral Triangle")
} else if(a===b || b===c || c===a) {
alert("This is an Isosceles Triangle")
}else if(a+b >c || b+c>a || a+c>b) /*if (a!==b && b!==c && c!==a)*/ {
  alert ("This is a Scalene Triangle")
}else {
  alert("Input other values!");
}
};

// //
// // var a= prompt("Enter side A: ");
// // var b= prompt("Enter side B: ");
// // var c= prompt("Enter side C: ");
//
// if(a===b && a===c && b===c){
//   alert("Equilateral");
// }
// else if(a===b || b===c || a===c){
//   alert("Isosceles");
// }
// else if(a+b<=c || b+c<=a|| a+c<=b){
//   alert("Not a Triangle");
// }
// else{
//   alert("Scalar");
// }
