// Function Assignment
function my_Second_Function () {
    var str=("The paragraph below is now blue!");
    var str2=("This paragragh element is now blue!")
    var result1=str.fontcolor("blue");
    var result2=str2.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML = result2;
    document.getElementById("Blue").innerHTML = result1;
}
// This is the example from step 69 in the JavaScript course
function myConFunction() {
    var sentence="I am learning";
    sentence +=" a lot from this book!";
    document.getElementById("Concatenate").innerHTML=sentence;
}// End example
// Operator Assignment
function myConFunction2() {
    var sent1="In this assignemnt,";
    sent1 +=" I will demonstrate how to ";
    sent1 +="concatenate strings using the \"+=\" operator";
    document.getElementById("operatorAssignment").innerHTML=sent1;
}