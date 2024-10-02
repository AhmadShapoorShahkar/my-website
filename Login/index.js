document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Retrieve the stored username and password from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Validate the entered credentials against the stored ones
    if (username === storedUsername && password === storedPassword) {
      alert("Login successful!");
      window.location.href = "../Main/main.html"; // Redirect to the main page after login
    } else {
      alert("Invalid username or password");
    }
  });
