function handleLoginBtn() {
    appcan.window.open("loginPage", "loginPage.html", 0, 0, 0, 0, 0);
}

var loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", handleLoginBtn, false);

function handleRegBtn() {
    appcan.window.open("registerPage", "registerPage.html", 0, 0, 0, 0, 0);
}

var regBtn = document.getElementById("registerBtn");
regBtn.addEventListener("click", handleRegBtn, false);
