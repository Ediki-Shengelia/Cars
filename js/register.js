"use strict";

export function forma(e) {
  e.preventDefault();

  let errors = {};

  let username = document.getElementById("usernamef").value;
  if (username === "") {
    errors.usernameo = "username value can not be empty";
  }

  let passw1 = document.getElementById("passwfield").value;
  let passw2 = document.getElementById("passwfield2").value;

  if (passw1 === "") {
    errors.password = "password value can not be empty";
  }
  if (passw1 !== passw2) {
    errors.password2 = "password must be the same";
  }

  let phone = document.getElementById("phone").value;
  if (phone === "") {
    errors.phone = "phone value can not be empty";
  }

  let gender = false;
  document.querySelectorAll(".genderinput").forEach((element) => {
    if (element.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender2 = "select your gender";
  }

  let agree = document.getElementById("check").checked;
  if (!agree) {
    errors.agree = "you must agree terms and conditions";
  }

  document.querySelectorAll(".error-text2").forEach((el) => {
    el.innerText = "";
  });

  for (let key in errors) {
    let errorElement = document.getElementById("error-" + key);
    if (errorElement) {
      errorElement.textContent = errors[key];
    }
  }
}

export function UsernameRegex() {
  let User = document.getElementById("usernamef").value;
  let errorUsers = document.getElementById("error-usernameo");
  let usernamepattern = /^[a-zA-Z0-9_]{3,16}$/;

  if (usernamepattern.test(User)) {
    errorUsers.textContent = "your username is valid";
    errorUsers.style.color = "green";
  } else {
    errorUsers.textContent = "your username is Invalid";
    errorUsers.style.color = "white";
  }
  if (User === "") {
    errorUsers.innerHTML = "";
  }
}

export function PasswordRegex() {
  let password = document.getElementById("passwfield").value;
  let errorPassw = document.getElementById("error-password");
  let passwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;

  if (passwRegex.test(password)) {
    errorPassw.textContent = "your password is valid";
    errorPassw.style.color = "green";
  } else {
    errorPassw.innerText = "your password is Invalid(მაგ:Ee123456)";
    errorPassw.style.color = "white";
  }
  if (password === "") {
    errorPassw.innerHTML = "";
  }
}

export function passRegex() {
  let password = document.getElementById("passwfield2").value;
  let errorPassw = document.getElementById("error-password2");
  let passwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;

  if (passwRegex.test(password)) {
    errorPassw.textContent = "your password is valid";
    errorPassw.style.color = "green";
  } else {
    errorPassw.innerText = "your password is Invalid";
    errorPassw.style.color = "white";
  }
  if (password === "") {
    errorPassw.innerHTML = "";
  }
}

export function phoneR() {
  let phone = document.getElementById("phone").value;
  let errorPhone = document.getElementById("error-phone");
  let phone1 = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  if (phone1.test(phone)) {
    errorPhone.textContent = "your phone number is valid";
    errorPhone.style.color = "green";
  } else {
    errorPhone.innerText = "your phone number is Invalid";
    errorPhone.style.color = "white";
  }
  if (password === "") {
    errorPhone.innerHTML = "";
  }
}
