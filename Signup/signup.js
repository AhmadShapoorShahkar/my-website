document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Store the username and password in localStorage (for demonstration purposes)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Account created successfully!");
    window.location.href = "../Login/index.html"; // Redirect to login page after sign-up
  });
