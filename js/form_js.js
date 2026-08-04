// script for register form validation
function validateRegForm() {
    var form = document.forms["myRegForm"];
    var name = form["nameInput"].value.trim();
    var email = form["emailInput"].value.trim();
    var dob = form["dobInput"].value;
    var password = form["passwordInput"].value;
    var confirmPassword = form["confirmPasswordInput"].value;
    var errorEl = document.getElementById("error");
    var errors = [];
    var invalidFields = [];

    errorEl.innerHTML = "";
    errorEl.classList.remove("visible");

    var today = new Date().toISOString().split('T')[0];
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function markInvalid(fieldId) {
        document.getElementById(fieldId).classList.add("input-error");
        invalidFields.push(fieldId);
    }

    function clearInvalid() {
        invalidFields.forEach(function(fieldId) {
            document.getElementById(fieldId).classList.remove("input-error");
        });
        invalidFields = [];
    }

    clearInvalid();

    if (!name) {
        errors.push("Name is required.");
        markInvalid("name");
    }

    if (!email) {
        errors.push("Email must be filled out.");
        markInvalid("email");
    } else if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email address.");
        markInvalid("email");
    }

    if (!dob) {
        errors.push("Date of Birth must be selected.");
        markInvalid("dob");
    } else if (dob > today) {
        errors.push("Date of Birth cannot be in the future.");
        markInvalid("dob");
    }

    if (!passwordRegex.test(password)) {
        errors.push("Password must be 8-12 characters and include letters and numbers.");
        markInvalid("psw1");
    }

    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
        markInvalid("psw1");
        markInvalid("psw2");
    }

    if (errors.length > 0) {
        errorEl.innerHTML = errors.map(function(msg) {
            return '<div>' + msg + '</div>';
        }).join('');
        errorEl.classList.add("visible");
        return false;
    }

    return true;
}