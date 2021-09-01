// Type of Operator Assignment
document.write(typeof 18 + "<br>");
document.write(typeof "Hello, world!" + "<br>");

// Type Coercion Assignment
document.write("\n10" + 5 + "<br>");
document.write("\nThis is a string that is being coerced to appear with the number " + 8, "<br> " );

// NaN Challenge
function NaNFunction() {
    document.getElementById("Test1").innerHTML = "a"/"a";
    document.getElementById("Test2").innerHTML = isNaN("This is true because it is a string, therefore not a number");
    document.getElementById("Test3").innerHTML = isNaN(18);
}

// Infinity (Positive and Negative) Assignment - The output appears above the Nan Challenge Output
document.write(7E399 + " <br >");
document.write(-5E314 + "<br>");

// Boolean Comparison Assignment
document.write(125>110);
document.write("<br>");
document.write(25>57);
document.write("<br>");

// Console.log Assigment
console.log(25+50);

// Boolean Challenge
console.log(81>15);
console.log(5<3);

// Double Equal SIgns Assignment
document.write(18==18);
document.write("<br>");
document.write(57==56);
document.write("<br>");

// Triple Equal Signs Assignment
var A = 125;
var B = 125;
document.write(A===B);
document.write("<br>");
var C = 25;
var D ="42";
document.write(C===D);
document.write("<br>");
var E = 31;
var F = "31";
document.write(E===F);
document.write("<br>");
var G = 85;
var H = 31;
document.write(G===H);
document.write("<br>");

// And & Or Operator Assignment
document.write(34>23 && 57<83);
document.write("<br>");
document.write(86>14 && 19>55);
document.write("<br>");
document.write(26>19 || 5>13);
document.write("<br>");
document.write(86>91 || 35>42);
document.write("<br>");

// Not Operator Assignment
document.write(!83>21);
document.write("<br>");
document.write(!42<15);
document.write("<br>");