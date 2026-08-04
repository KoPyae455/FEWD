// script for register form validation
function validateRegForm() {
    var email = document.forms["myRegForm"]["emailInput"].value;
    var password = document.forms["myRegForm"]["passwordInput"].value;
    var confirmPassword = document.forms["myRegForm"]["confirmPasswordInput"].value;
    var dob = document.forms["myRegForm"]["dobInput"].value;
    // validation for date disabled for now

    var today = new Date().toISOString().split('T')[0];

    // regular expression for password validation: minimum eight characters, at least one letter and one number
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;

    // to display error message in the form instead of alert
    let error = "";
    var errorEl = document.getElementById("error");
    errorEl.innerHTML = "";
    errorEl.classList.remove("visible");

    if (email == null || email == "") {
        // alert("Email must be filled out");
        error += "Email must be filled out.<br>";
    }
    if (dob > today) {
        // alert("Date of Birth cannot be in the future");
        error += "Date of Birth cannot be in the future.<br>";
        document.getElementById("dob").setAttribute("max", today);
    }
    if (!passwordRegex.test(password)) {
        error += "Password must be at least 8 characters long and contain at least one letter and one number.<br>";
    }
    if (password !== confirmPassword) {
        error += "Passwords do not match.<br>";
    }
    if (error !== "") {
        errorEl.innerHTML = error;
        errorEl.classList.add("visible");
        return false;
    }

    return true;
}

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