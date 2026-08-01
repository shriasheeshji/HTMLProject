// Run after page is loaded
window.onload = function () {

    if (localStorage.getItem("loggedIn") === "true") {

        const loginMenu = document.getElementById("loginMenu");

        if (loginMenu) {
            loginMenu.innerHTML =
                '<a href="#" onclick="logout()">Logout</a>';
        }
    }

    // Initialize fade animation
    document.querySelectorAll(".fade").forEach(section => {
        observer.observe(section);
    });
};

// Logout
function logout() {

    localStorage.clear();

    window.location.href = "Index.html";
}

// Smooth scroll to Services
function scrollServices() {

    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });

}

// Login
function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.querySelector('input[type="password"]').value;

    if (
        (username === "admin" && password === "nimda") ||
        (username === "samAdmin" && password === "NimdaSAM") ||
        (username === "hello" && password === "world")
    ) {

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);

        window.location.href = "EmployeeList.html";

    }
    else {

        alert("Invalid username or password.");

    }
}

// Smooth scroll to Features
function scrollFeatures() {

    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });

}

// Contact button
function joinNow() {

    alert("Thanks for joining! 🎉");

}

// Fade animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});