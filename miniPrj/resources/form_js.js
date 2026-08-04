//for date disabled when window load anonymous function(unamed function)
window.onload = function () {
    var today = new Date().toISOString().split("T")[0];
    document.getElementById("dob").setAttribute("max", today);
}
//script for register form validation

function validateRegForm() {
    //var usr_email = document.getElementById("mail").value;
    var usr_dob = document.forms["myRegForm"]["dobInput"].value;
    var usr_email = document.forms["myRegForm"]["mailInput"].value;
    var usr_psw1 = document.forms["myRegForm"]["psw1Input"].value;
    var usr_psw2 = document.forms["myRegForm"]["psw2Input"].value;




    //regular expression pattern for password

    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,13}$/;


    //TO display error message

    let error = "";

    if (usr_email == null || usr_email == "") {
        //alert("Please enter your email!");
        error += "Please enter your email!<br>";


    }

    if (usr_dob > today) {
        error += "Birth date must not be future date!<br>";
    }

    if (!pattern.test(usr_psw1)) {
        error += "Password must contain at lease 10 chars, one uppercase, one lowercase, one number and one special chars!<br>";

    }

    if (usr_psw1 != usr_psw2) {
        error += "Password and Confirm password must be same!<br>";

    }
    //for error msg
    document.getElementById("error").innerHTML = error;
    if (error != "") {
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("dob").setAttribute("max", today);
        return false;
    }

    return true;

}

// function for show or hide register form
// minimal show/hide helper so the existing button works
function showHideForm() {
    var form = document.forms["myRegForm"];
    var toggleBtn = document.getElementById("togBtn");
    if (!form) return;
    // toggle visibility
    if (form.style.display === "none") {
        form.style.display = "";
        if (toggleBtn) toggleBtn.innerHTML = "Hide Form";
    } else {
        form.style.display = "none";
        if (toggleBtn) toggleBtn.innerHTML = "Show Form";
    }
}