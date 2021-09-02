// Local and Global Variable Assignment
// Global Variable
var num1=18;
function multiplyNums () {
    document.write(5 * num1 + "<br>");
}
function divideNums () {
    document.write(num1 / 3 + "<br>");
}
multiplyNums();
divideNums();
// Local Variable w/purposeful error for debug
function concat () {
    var str="Hello,";
    document.write(str + " World!");
    document.write("<br>");
}
function concat2 () {
    document.write(str + " universe!");
}
concat();
/* concat2(); * This results in an error you see in debug, but this is currently
commented out to allow for functions below to execute as normal*/

// Method Assignment
function get_Date() {
    if (new Date().getHours() > 12) {
        document.getElementById("amGreet").innerHTML="Good Afternoon or Good Evening";
    }
}

// If Assignment
if (15 > 12) {
    document.write("15 is greater than 12");
}