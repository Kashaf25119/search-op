document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear any previous error message
    document.getElementById("error-message").textContent = "";

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Form validation
    if (!name || !email || !message) {
        document.getElementById("error-message").textContent = "All fields are required!";
        return;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("error-message").textContent = "Please enter a valid email address!";
        return;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    document.getElementById("contact-form").reset();
});
