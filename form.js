document.getElementById('studentForm').addEventListener('submit', function (event) 
{
    event.preventDefault(); // Prevent form submission

    // Reset error messages
    resetErrors();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const gender = document.getElementById('gender').value;
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();

    let isValid = true;

    // Validation logic
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById('nameError').textContent = "Please enter a valid name.";
        isValid = false;
    }

    if (!address) {
        document.getElementById('addressError').textContent = "Address cannot be empty.";
        isValid = false;
    }

    if (!city) {
        document.getElementById('cityError').textContent = "City cannot be empty.";
        isValid = false;
    }

    if (!state) {
        document.getElementById('stateError').textContent = "State cannot be empty.";
        isValid = false;
    }

    if (!gender) {
        document.getElementById('genderError').textContent = "Please select your gender.";
        isValid = false;
    }

    if (!/^\d{10}$/.test(mobile)) {
        document.getElementById('mobileError').textContent = "Please enter a valid 10-digit mobile number.";
        isValid = false;
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (isValid) {
        alert("Congratulations! Welcome.");
    }
});

function resetErrors() {
    document.getElementById('nameError').textContent = "";
    document.getElementById('addressError').textContent = "";
    document.getElementById('cityError').textContent = "";
    document.getElementById('stateError').textContent = "";
    document.getElementById('genderError').textContent = "";
    document.getElementById('mobileError').textContent = "";
    document.getElementById('emailError').textContent = "";
}
