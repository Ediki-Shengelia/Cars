"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var cookieNotification = document.getElementById("cookie-notification");
  var acceptCookiesButton = document.getElementById("accept-cookies");

  // Check if user has already accepted cookies
  var cookiesAccepted = localStorage.getItem("cookiesAccepted");

  if (!cookiesAccepted) {
    // Show the cookies notification
    cookieNotification.style.display = "block";
  }

  // Event listener for accept cookies button
  acceptCookiesButton.addEventListener("click", function () {
    // Hide the cookies notification
    cookieNotification.style.display = "none";
    // Set a flag in localStorage to remember that the user accepted cookies
    localStorage.setItem("cookiesAccepted", true);
  });
});
function phone() {
 
  document.getElementById("userNumber").addEventListener("submit", function (e) {
    
    e.preventDefault();
    
    
    let checkbox = document.getElementById("save");
    let inputValue = document.getElementById("phone").value;

    
    if (checkbox.checked) {
    
      Cookies.set("cookiesUserNumber", inputValue);
    } else {
    
      Cookies.remove("cookiesUserNumber");
    }
  });

 
  let savedUserNumber = Cookies.get("cookiesUserNumber");
  if (savedUserNumber) {

    document.getElementById("phone").value = savedUserNumber;

    document.getElementById("save").checked = true;
  }
}


phone();