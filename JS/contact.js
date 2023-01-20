"use strict";
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const text = document.getElementById("text");

  let isValid = true;

  const email_re = /^[a-z0-9\.]+\@(gmail|yahoo|hotmail)\.(com|gr)$/i;
  const firstname_re = /^[a-zα-ωά-ώ]{2,}$/i;
  const lastname_re = /^[a-zα-ωά-ώ]{2,}$/i;
  const phone_re = /^\d{10}$/;

  // regular expression for email
  if (!email_re.test(email.value)) {
    alert("E-mail is not valid");
    email.classList.add("error");
    isValid = false;
  } else {
    email.classList.remove("error");
  }

  // regular expression for name
  if (!firstname_re.test(firstname.value)) {
    alert("name is not valid");
    firstname.classList.add("error");
    isValid = false;
  } else {
    firstname.classList.remove("error");
  }

  // regular expression for last name
  if (!lastname_re.test(lastname.value)) {
    alert("your last name is not valid");
    lastname.classList.add("error");
    isValid = false;
  } else {
    lastname.classList.remove("error");
  }

  // regular expression for phone
  if (!phone_re.test(phone.value)) {
    alert("phone is not valid");
    phone.classList.add("error");
    isValid = false;
  } else {
    phone.classList.remove("error");
  }
  alert("Thank you for reaching out to us.");
});
