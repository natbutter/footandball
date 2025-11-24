// ===== CONFIGURATION =====
const TERM_PASSWORD = "2026-term1"; // Change each term
const EXPIRY_DATE = new Date("2026-04-02T23:59:59"); // End of term

// ===== LOGIN FUNCTION =====
function login() {
  const enteredPassword = document.getElementById("password").value.trim();

  if (enteredPassword === TERM_PASSWORD) {
    localStorage.setItem("fabAuth", JSON.stringify({
      loggedIn: true,
      expiry: EXPIRY_DATE.getTime()
    }));
    window.location.href = "messages.html";
  } else {
    document.getElementById("error").innerText = "Incorrect password. Please try again.";
  }
}

// ===== CHECK ACCESS =====
function checkLogin() {
  const authData = JSON.parse(localStorage.getItem("fabAuth"));

  if (!authData || !authData.loggedIn) {
    window.location.href = "login.html";
    return;
  }

  if (Date.now() > authData.expiry) {
    localStorage.removeItem("fabAuth");
    window.location.href = "login.html";
    return;
  }

  // Load updates content
  fetch("updates.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("updates-container").innerHTML = data;
    })
    .catch(() => {
      document.getElementById("updates-container").innerHTML = "<p>Error loading updates.</p>";
    });
}
