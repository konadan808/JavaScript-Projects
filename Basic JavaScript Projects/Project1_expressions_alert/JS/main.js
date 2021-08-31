document.write("Hello, World!<br>");
var X=(" This is a string variable assigned to variable X<br>");
document.write(X);
window.alert(X);
var Y=("This string deomonstrates it\'s usage of the backslash in order to be able to print out \', \", and \\<br>");
document.write(Y);
document.write("\"To be or not to be," + " that is the question:" + " Whether \'tis nobler in the mind to suffer" + " the slings and arrows of outrageoous fortune...\"" + "-Hamlet<br>");
var Hamlet=("\"Or to take arms against a sea of troubles" + " and by opposing end them.  To die - to sleep," + " no more; and by a sleep to say we end" + 
" the heart-ache and the thousand natural shocks...\"" + "-Hamlet<br>");
document.write(Hamlet);
var craft1="X-wing", craft2="TIE Fighter", craft3="Y-wing", craft4="TIE Interceptor", craft5="Millennium Falcon", craft6="Death Star";
var craft1=craft1.fontcolor("green"); craft2=craft2.fontcolor("red"); craft3=craft3.fontcolor("Yellow"); craft4=craft4.fontcolor("Blue"); craft5=craft5.fontcolor("silver"); craft6=craft6.fontcolor("gray");
document.write(craft4);
document.write("<br>");
document.write(356+462);
document.write("<br>");
function My_First_Function() {  /*Defining a function and naming it -- Step 63 in JavaScript course example*/
    var str="This text is green"; //Defining a variable and giving it a string value
    var result=str.fontcolor("green"); //Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML=result; //Putting the value of result into HTML element with "Green_Text" id
}