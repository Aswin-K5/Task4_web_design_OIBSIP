document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const registerButton = document.getElementById("registerButton");
    const usersDatabase = [];
    registerButton.addEventListener("click", function (e) {
        e.preventDefault();
        const firstNameInput = document.getElementById("firstName").value;
        const lastNameInput = document.getElementById("lastName").value;
        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;
        const emailInput = document.getElementById("email").value;
        const mobileNumberInput = document.getElementById("mobileNumber").value;
        const genderInput = document.getElementById("gender").value;
        if (usersDatabase.some(user => user.username === usernameInput)) {
            alert("Username already taken");
            return;
        }
        usersDatabase.push({
            firstName: firstNameInput,
            lastName: lastNameInput,
            username: usernameInput,
            password: passwordInput,
            email: emailInput,
            mobileNumber: mobileNumberInput,
            gender: genderInput
        });
        alert("Registration Successful");
        registrationForm.reset();
    });
});
