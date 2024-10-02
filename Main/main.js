document.getElementById("about").addEventListener("click", function () {
  window.location.href = "https://www.wikipedia.org/";
});

document.getElementById("skills").addEventListener("click", function () {
  window.location.href =
    "https://www.indeed.com/career-advice/resumes-cover-letters/best-resume-skills";
});

document.getElementById("projects").addEventListener("click", function () {
  window.location.href =
    "https://www.sgo.ch/projektmanagement.html?utm_source=bing&utm_medium=cpc&msclkid=67d0dcea1a001f33e8c4ba05ea77a3b7";
});

document.getElementById("contact").addEventListener("click", function () {
  window.location.href = "https://www.jetbrains.com/de-de/youtrack/helpdesk/";
});

// Add this script to handle the logout functionality
document.getElementById("logout").addEventListener("click", function (event) {
  event.preventDefault();

  // Clear the stored username and password from localStorage
  localStorage.removeItem("username");
  localStorage.removeItem("password");

  alert("You have been logged out.");
  window.location.href = "../Login/index.html"; // Redirect to the login page
});
