// js/script3.js

document.addEventListener("DOMContentLoaded", function () {
    const signUpButton = document.querySelector("button");
    const fullNameInput = document.querySelector("input[type='text']");
    const emailInput = document.querySelector("input[type='email']");
    const checkbox = document.querySelector("input[type='checkbox']");

    signUpButton.addEventListener("click", function () {
        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();

        // Simple validation
        if (fullName === "") {
            alert("Please enter your full name.");
            fullNameInput.focus();
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            emailInput.focus();
            return;
        }

        if (!checkbox.checked) {
            alert("You must agree to the terms and policies.");
            return;
        }

        // If all validations pass
        alert("Account created successfully!\nWelcome, " + fullName + "!");
        // You can add code here to send data to server using fetch or AJAX
    });
});
