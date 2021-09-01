// Dictionary Assignment
function first_Dictionary() {
    var Animal = {
        Species:"Fish",
        Color:"Silver, Red, and Blue",
        Breed:"Neon Tetra",
        Qty:7,
        Movement:"Swim",
        Food:"Fish Flakes",
    };
    delete Animal.Qty; // Delete Assignment
    document.getElementById("Dictionary").innerHTML=Animal.Qty;
}