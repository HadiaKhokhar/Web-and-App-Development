const formBtn = document.getElementsByClassName("formBtn")[0];
const cancelformBtn = document.getElementsByClassName("cancelformBtn")[0];
const form = document.getElementById("form");
const submitformBtn = form.getElementsByClassName("submit")[0];
const resetformBtn = form.getElementsByClassName("reset")[0];
var formValidator = document.getElementById("formValidationpara");
var firstName;
var lastName;
var userEmail;
var gender ;




function closeForm() {
    form.style.display = "none";
    formBtn.classList.remove('cancelformBtn');
    formBtn.textContent = "Save Your Info";
}
function newFormValues() {
    firstName = document.getElementById("firstname").value;
    lastName = document.getElementById("lastname").value;
    userEmail = document.getElementById("email").value;
    gender = document.querySelector('input[name="gender"]:checked');
    return [firstName, lastName, userEmail, gender ? gender.value : null]
}
function isAllFieldFilled() {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (firstName === "" || lastName === "" || userEmail === "" || gender === null) {
        formValidator.textContent = "Please fill all fields to save your Info"
        return false;
    }
    if (!emailRegex.test(userEmail)) {
        formValidator.textContent = "Please enter a valid email address"
        return false;
    }
    formValidator.textContent = ""
    return true;
}
function resetForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
}
function cardGenerator(firstName, lastName, email, gender) {

    // Get the card container
    const cardBox = document.getElementById('cardsBox');

    // Create the card div
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');

    // Create the icon div and add the appropriate image
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('icon');
    const iconImg = document.createElement('img');
    iconImg.src = gender === 'male' ? 'Icons/male.png' : 'Icons/female.png';
    iconImg.alt = gender;
    iconDiv.appendChild(iconImg);

    // Create the info div
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    // Create the name and email fields dynamically
    const firstNameDiv = document.createElement('div');
    firstNameDiv.innerHTML = `<h2>First Name: </h2><p>${firstName}</p>`;

    const lastNameDiv = document.createElement('div');
    lastNameDiv.innerHTML = `<h2>Last Name: </h2><p>${lastName}</p>`;

    const emailDiv = document.createElement('div');
    emailDiv.innerHTML = `<h2>Email: </h2><p>${email}</p>`;

    // Append all info divs to the info container
    infoDiv.appendChild(firstNameDiv);
    infoDiv.appendChild(lastNameDiv);
    infoDiv.appendChild(emailDiv);

    // Append icon and info to the user card
    userCard.appendChild(iconDiv);
    userCard.appendChild(infoDiv);

    // Append the user card to the cardBox
    cardBox.appendChild(userCard);
}
formBtn.addEventListener("click", function() {
    if (formBtn.classList.contains('cancelformBtn')) {
        closeForm()
    } else {
        // If the button does not have 'cancelformBtn' class, show the form
        form.style.display = "flex";
        formBtn.classList.add('cancelformBtn');
        formBtn.textContent = "Cancel";
    }
})
submitformBtn.addEventListener('click', function() {
    var formValues = newFormValues();
    if (isAllFieldFilled()) {
        closeForm()
        cardGenerator(formValues[0], formValues[1], formValues[2], formValues[3])
        resetForm()
    }
})
resetformBtn.addEventListener('click', function() {
     formValidator.textContent = ""
    resetForm()
})
