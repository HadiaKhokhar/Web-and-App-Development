function validateForm() {
    var firstName = document.getElementById("firstNameField");
    var lastName = document.getElementById("lastNameField");

    if (firstName.value.length === 0) {
        alert("Please enter your first name");
        firstName.focus();
        firstName.style.background = "yellow";
        return false;
    } else {
        firstName.style.background = "white";
    }

    if (lastName.value.length === 0) {
        alert("Please enter your last name");
        lastName.focus();
        lastName.style.background = "yellow";
        return false;
    } else {
        lastName.style.background = "white";
    }

    return true;  // If both fields are filled, the form will be submitted
}
function checkForSelection() {
    if (document.getElementById("states").selectedIndex === 0) {
        alert("Please select a state.");
        return false;  // Prevent form submission
    }
}

function validateRadios() {
    var radios = document.getElementsByName("r1");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return true;  // At least one radio button is checked
        }
    }
    alert("Please check one.");  // No radio button is selected
    return false;  // Prevent form submission
}
function validateZIP() {
    var valueEntered = document.getElementById("zip").value;
    var numChars = valueEntered.length;
    if (numChars < 5) {
        alert("Please enter a 5-digit code.");
        return false;
    }
    for (var i = 0; i <= 4; i++) {
        var thisChar = parseInt(valueEntered[i]);
        if (isNaN(thisChar)) {
            alert("Please enter only numbers.");
            return false;
        }
    }
}

