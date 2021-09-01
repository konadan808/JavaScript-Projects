// Addition Operator Assignment
function addFunction() {
    var addition = 12 + 6;
    document.getElementById("math").innerHTML = addition;
}
// Subtraction Operator Assignment
function subtractFunction(){
    var subtraction = 148 - 83 ;
    document.getElementById("sub").innerHTML = subtraction;
}

// Multiplication Operator Assignment
function multiplyFunction(){
    var multiply = 25 * 18 ;
    document.getElementById("mul").innerHTML = multiply;
}

// Division Operator Assignment
function divideFunction(){
    var divide = 84 / 3 ;
    document.getElementById("div").innerHTML = divide;
}

// Multiple Operations Assignment
function multiFunction(){
    var multi = (450 + 64) * 3 / 2 - 533;
    document.getElementById("allOperators").innerHTML = multi;
}

// Modulus or Remainder Operator Assignment
function modulusFunction () {
    var remainder = 83 % 7;
    document.getElementById("mod").innerHTML = remainder;
}

// Negation Operator Assignment
function negatorFunction () {
    var negate = 25;
    document.getElementById("neg").innerHTML = -negate;
}

// Increment and Decrement Operator Assignment
function incrementFunction() {
    var num1=20;
    num1++;
    document.getElementById("inc").innerHTML = num1;
}
function decrementFunction() {
    var num2=3;
    num2--;
    document.getElementById("dec").innerHTML = num2;
}

// Math.Random Assignment
window.alert (Math.floor(Math.random() * 1000)); // Looked up how to generate integers, using Math.floor

// Math Object Challenge
function squarerootFunction () {
    var square = Math.sqrt(81);
    document.getElementById("sqr").innerHTML = square;
}