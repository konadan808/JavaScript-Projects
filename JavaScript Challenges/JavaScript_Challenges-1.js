// Form popup challenge
function openForm() {
    document.getElementById("myForm").style.display="block";
}

function closeForm() {
    document.getElementsByName("myForm").style.display="none";
}
// Form Validation Challenge
function validateForm() {
    var field=document.forms["myForm"]
    ["fName", "lName", "phoneNumber", "eMail" ].value;
    if (field=="") {
        alert("You must fill in all fields");
        return false;
    }
}