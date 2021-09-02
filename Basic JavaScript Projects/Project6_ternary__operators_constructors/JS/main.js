// Project6 Ternary Operators Constructors Assignment
function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52)?"You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride + " to ride.";
}

// Ternary Operators Challenge
function Age_Function() {
    var Age, Old_Enough;
    Age=document.getElementById("Age").value;
    Old_Enough=(Age>17)?"You are old enough":"You are too young";
    document.getElementById("OldEnough?").innerHTML = Old_Enough + " to watch this movie.";
}

//Coding Assignment Steop 135 of JavaScript Course
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily=new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var EriK=new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + EriK.Vehicle_Color + "-colored " + EriK.Vehicle_Model +
     " manufactured in " + EriK.Vehicle_Year;
}

// New Keyword Assignment 
function Spacecraft (CraftName, Manufacturer, Model, Role, CrewNumber) {
    this.craft_name=CraftName;
    this.craft_make=Manufacturer;
    this.craft_Model=Model;
    this.craft_Role=Role;
    this.craft_Crew=CrewNumber;
}
function myCraft() {
    var Luke=new Spacecraft("X-Wing", "Incom Corporation", "T-65", "Space Superiority Fighter", 1);
    var Vader=new Spacecraft("Darth Vader's TIE Fighter", "Sierna Fleet Stytems", "x1 Prototype TIE Advanced", "Space Superiority Fighter", 1);
    var Han=new Spacecraft("Millennium Falcon", "Corellian Engineering Corperation", "YT-1300", "Light Freighter", 5);
    var A_Ackbar=new Spacecraft("B-wing", "Slayin & Korpil", "A/SF-01", "Heavy-Assult Starfighter", 1);
    document.getElementById("newKeyword1").innerHTML = "Luke Skywaker flew the " + Luke.craft_name + " which was made by " + Luke.craft_make + 
    ".  It is a " + Luke.craft_Model + " which served as a " + Luke.craft_Role + " and seats " + Luke.craft_Crew;
}

// Reserved Keyword Challenge
/*var true =25;
document.write(true); * This does not run, and actually prevents most of the other functions from occuring */
function computerRig(CPU, RAM, Memory, GPU, OS) {
    this.CPU_Model=CPU;
    this.RAM_Qty=RAM;
    this.Memory_Qty=Memory;
    this.GPU_Model=GPU;
    this.OS_Name=OS;
}

// Nested Functions Assignment
function add_Function() {
    document.getElementById("Answer").innerHTML=integers();
    function integers() {
        var num1=21;
        function addNums() {num1 += 5}
        addNums();
        return num1;        
    }
}