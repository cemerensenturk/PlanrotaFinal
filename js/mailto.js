const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Check if all fields are filled
  if (!name || !email || !message) {
    const error = document.createElement("div");
    error.classList.add("error");
    error.textContent = "All fields are required.";
    form.appendChild(error);
    return;
  }

  // Create the email message
  const emailMessage = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  // Open the user's email client and populate the fields
  window.location.href = `mailto:e.senturk@birerp.com?subject=Contact Us&body=${emailMessage}`;
});