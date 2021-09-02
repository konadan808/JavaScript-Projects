// Concat() Method Assignment
function stringTogether() {
    var phrase1 = "The first rule of any technology used in business is that automation";
    var phrase2 = " applied to an efficent operation will magnify the efficiency.";
    var phrase3 = " The second is that automation applied to an inefficient operation";
    var phrase4 = " will magnify the inefficiency. - Bill Gates";
    var together = phrase1.concat(phrase2, phrase3, phrase4);
    document.getElementById("final_phrase").innerHTML = together;
}

// Slice Method Assignment plus toUpperCase() Challenge
function sliceQuote () {
    var quote="Do or do not, there is no try";
    var bit=quote.slice(0,12);
    document.getElementById("quote").innerHTML=bit;
}
function nameSubmit() {
    var name=document.getElementById("name").value;
    var answer="Correct Incorrect"
    answer=answer.toUpperCase();
    var correct=answer.slice(0,8);
    var incorrect=answer.slice(8,17);
    if (name == "Yoda") {
        document.getElementById("nameResult").innerHTML="You are " + correct;
    }
    else {
        document.getElementById("nameResult").innerHTML="You are " + incorrect;
    }
}

// Search() Method Challenge
function searchFunction() {
    var str="Below you will see the value of the word Irish in this string!";
    document.getElementById("search").innerHTML=str.search("Irish");
}

// Number Methods Assignment
function numMethod() {
    var num=1358437;
    document.getElementById("IntToString").innerHTML= num.toString() + " is now a string!";
}

// toPrecision() Method Assignment
function lengthMethod() {
    var num11=1538843.218651321478818833217741;
    document.getElementById("length11").innerHTML= num11.toPrecision(11);
}

// New Methods Challenge- toFixed() & valueOf() Methods
var fixedValue=9.425871;
function getFixed() {
    var fixed=fixedValue.toFixed(4);
    document.getElementById("fixed").innerHTML=fixed;
}
function getValue() {
    document.getElementById("value").innerHTML=fixedValue.valueOf();
}