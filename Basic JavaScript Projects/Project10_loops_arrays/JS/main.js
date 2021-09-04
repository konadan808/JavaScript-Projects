// Loop Example-Step 198
function count_To_Ten() {
    var Digit= "";
    var X= 1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML=Digit;
}

// Loop Assignment
function Call_Loop () {
    var count= "";
    var Num1=10;
    while (Num1>0) {
        count += "<br>" + Num1;
        Num1--;
    }
    document.getElementById("Loop").innerHTML=count;
}

// Length Property Challenge
function word_Length() {
    var long="supercalifragilisticexpialidocious";
    document.getElementById("phrase").innerHTML=long.length;
}
    // For Loop Example-Step 202
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content= "";
var Y;
function for_Loop() {
    for(Y=0; Y<Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_Of_Instruments").innerHTML=Content;
}

// For Loop Assignment
var campList=["Lamp", "Sleeping Bag", "Gas Grill", "Dishes", "Food and Water", "Beer", "Tent", "Firewood", "Jacket"];
var List= "";
var num2;
function camping_List() {
    for(num2=0; num2<campList.length; num2++) {
        List += campList[num2] + "<br>";
    }
    document.getElementById("List_Of_CampingSupplies").innerHTML=List;
}

// Document.GetElementById().InnerHTML Assignment
function array_Function() {
    var dog_Activity=[];
    dog_Activity[0]="napping";
    dog_Activity[1]="eating";
    dog_Activity[2]="running";
    dog_Activity[3]="playing with their toy";
    dog_Activity[4]="begging for treats";
    document.getElementById("Array").innerHTML="Some of my dog's favorite activities are " + dog_Activity[4] + " .";
}

//Const Keyword Assignment
function constant_function(){
    const Television={type:"Flatscreen", brand:"LG", size: "55 Inch", resolution:"4k"};
    Television.size="65 Inch";
    Television.inputport="Display Port";
    document.getElementById("Constant").innerHTML="A " + Television.size + " TV would work better than the smaller size, and it has the addition of a " +
    Television.inputport;
}

// Let Keyword Assignment
var num3="<br>101";
document.write(num3 + "<br>");
{
let num3="202";
document.write(num3 + "<br>");
}
document.write(num3 + "<br>");

// Return Statement Challenge
var num4= returnFunction(5,7);
function returnFunction(a,b) {
    return a * b;
}
document.write(num4 + "<br>");

// Object Assignment
let stapler={
    brand: "Swingline",
    model: " 646 Desktop Stapler Heavy Duty",
    sheet_capacity: "20 Sheet capacity",
    weight: "11.2 ounces",
    color: "Red",
    part_Number: " S7064698",
    company_owner: "Initech",
    user: "Milton Waddams",
    description : function (){
        return "The " + this.brand + this.model + this.part_Number + " has a " + this.sheet_capacity + " and it is an unauthorized " + this.color + 
        " that is needed to be collected from employee " + this.user + " per " + this.company_owner + " proper desk stapler etiquette.";
    }
};
document.getElementById("deskObject").innerHTML=stapler.description();

// Break Statement Challenge
function count_Function () {
    var output= "";
    var num5;
    for (num5=0; num5<10; num5++) {
        if(num5==7){
        break;
        }
      output += num5 + "<br>";
    }
    document.getElementById("count7").innerHTML=output;
}

// Continue Statement Challenge
function continue_function() {
    var txt="";
    for(var num6=0; num6<11; num6++) {
        if(num6==8){
        continue;
        }
    txt += num6 + "<br>";
    }
    document.getElementById("skip8").innerHTML=txt;
}