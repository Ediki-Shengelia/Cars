"use strict";

let formEl = document.getElementById("login");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  let errors = {};

  let usernamevalue = document.getElementById("usernamefield").value;
  if (usernamevalue === "") {
    errors.username = "username value can not be empty";
  }

  let passwordvalue = document.getElementById("passwordfield").value;
  if (passwordvalue === "") {
    errors.passw = "password value can not be empty";
  }

  this.querySelectorAll(".error-text").forEach((item) => {
    item.innerText = " ";
  });
  for (let index in errors) {
    let errorElement = document.getElementById("error-" + index);
    if (errorElement) {
      errorElement.innerText = errors[index];
    }
  }
  if (Object.keys(errors).length === 0) {
    window.location.href = "main.html";
  }
});

let password = document.getElementById("passwordfield");
let Icon = document.getElementById("icon");

Icon.addEventListener("click", hideClick);

function hideClick() {
  if (password.type == "password") {
    password.setAttribute("type", "text");
    Icon.classList.remove("fa-eye-slash");
    Icon.classList.add("fa-eye");
  } else {
    password.setAttribute("type", "password");
    Icon.classList.add("fa-eye-slash");
    Icon.classList.remove("fa-eye");
  }
}

let email = document.getElementById("usernamefield");
email.addEventListener("keyup", emailRegex);

function emailRegex() {
  let usernamepattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let username = document.getElementById("usernamefield").value;
  let errorUser = document.getElementById("error-username");

  if (username.match(usernamepattern)) {
    errorUser.textContent = "your username is valid";
    errorUser.style.color = "green";
  } else {
    errorUser.textContent = "your username is Invalid";
    errorUser.style.color = "white";
  }

  if (username === "") {
    errorUser.innerHTML = "";
  }
}

let passwordRegex = document.getElementById("passwordfield");
passwordRegex.addEventListener("keyup", passwR);

function passwR() {
  let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  let passwordd = document.getElementById("passwordfield").value;
  let passwError = document.getElementById("error-passw");

  if (passwordd.match(passwordPattern)) {
    passwError.textContent = "your password is valid";
    passwError.style.color = "green";
  } else {
    passwError.innerText = "your password is Invalid(მაგ:Ee123456)";
    passwError.style.color = "white";
  }
  if (passwordd === "") {
    passwError.innerHTML = "";
  }
}

let newAcc = document.getElementById("newBtn");

newAcc.addEventListener("click", newClick);

function newClick() {
  let newDiv = document.getElementById("newDiv");
  newDiv.classList.add("active");
}

let closeIcon = document.getElementById("close");
closeIcon.addEventListener("click", closeclick);

function closeclick() {
  newDiv.classList.remove("active");
}

import { forma } from "./register.js";

let formElement = document.getElementById("mainForm");
formElement.addEventListener("submit", forma);

import { UsernameRegex } from "./register.js";
let registerUsername = document.getElementById("usernamef");
registerUsername.addEventListener("keyup", UsernameRegex);

import { PasswordRegex } from "./register.js";
let PasswordR = document.getElementById("passwfield");
PasswordR.addEventListener("keyup", PasswordRegex);

import { passRegex } from "./register.js";
let passwordRegex2 = document.getElementById("passwfield2");
passwordRegex2.addEventListener("keyup", passRegex);

import { phoneR } from "./register.js";
let phoneRegex = document.getElementById("phone");
phoneRegex.addEventListener("keyup", phoneR);
