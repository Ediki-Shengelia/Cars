document.addEventListener("DOMContentLoaded", function() {
    var cookieNotification = document.getElementById("cookie-notification");
    var acceptCookiesButton = document.getElementById("accept-cookies");

    // Check if user has already accepted cookies
    var cookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (!cookiesAccepted) {
        // Show the cookies notification
        cookieNotification.style.display = "block";
    }

    // Event listener for accept cookies button
    acceptCookiesButton.addEventListener("click", function() {
        // Hide the cookies notification
        cookieNotification.style.display = "none";
        // Set a flag in localStorage to remember that the user accepted cookies
        localStorage.setItem("cookiesAccepted", true);
    });
});