document.getElementById('phoneNumberInput').addEventListener('input', function() {
    var svgTick1 = document.getElementById('svgTick1');
    var phoneNumber = document.getElementById('phoneNumberInput').value;
    // Validate the phone number and change SVG color if 10 digits are entered
    if (phoneNumber.length === 9) {
      svgTick1.style.fill = 'green'; // Change SVG color to green
    } else {
      svgTick1.style.fill = 'red'; // Change SVG color to red
    }
  });


document.getElementById('loyaltyPointsBtn').addEventListener('click', function() {
    // Get the phone number entered by the user
    var phoneNumber = document.getElementById('phoneNumberInput').value;
    // Validate the phone number using a regular expression
    var phoneRegex = /^\d{9}$/; // Assuming a 10-digit phone number format
    if (!phoneRegex.test(phoneNumber)) {
    alert("Invalid phone number. Please enter a 10-digit phone number.");
    return; // Stop further execution if the phone number is invalid
    }
    // Redirect to the registration page

    // Creating an object for user
    var user = {
        phone: phoneNumber
    };
    var userJSON = JSON.stringify(user);
    localStorage.setItem('user', userJSON);
    window.location.href = 'registration.html';
});
  