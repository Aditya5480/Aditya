document.addEventListener("DOMContentLoaded", function () {
  const otpButton = document.querySelector("button:nth-of-type(1)");
  const emailButton = document.querySelector("button:nth-of-type(2)");

  otpButton.addEventListener("click", function () {
    const phoneInput = document.querySelector('input[type="tel"]').value;
    if (!phoneInput || phoneInput.length < 10) {
      alert("Please enter a valid phone number.");
    } else {
      alert("OTP sent to " + phoneInput);
    }
  });

  emailButton.addEventListener("click", function () {
    alert("Redirecting to email login...");
  });
});