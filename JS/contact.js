"use strict";
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const text = document.getElementById("text");

  // VALIDATION LIST FOR CLASSLIST.ADD
  const firstNameValid = document.getElementById("firstNameValid");
  const lastNameValid = document.getElementById("lastNameValid");
  const emailValid = document.getElementById("emailValid");
  const phoneValid = document.getElementById("phoneValid");
  const textValid = document.getElementById("textValid");

  // innerHTML ID LIST
  const firstNameText = document.getElementById("firstNameText");
  const lastNameText = document.getElementById("lastNameText");
  const emailText = document.getElementById("emailText");
  const phoneText = document.getElementById("phoneText");

  let isValid = true;

  const email_re = /^[a-z0-9\.]+\@(gmail|yahoo|hotmail)\.(com|gr)$/i;
  const firstname_re = /^[a-zα-ωά-ώ]{2,}$/i;
  const lastname_re = /^[a-zα-ωά-ώ]{2,}$/i;
  const phone_re = /^\d{10}$/;
  const text_re = /^.{3,}$/;

  // REGULAR EXPRESSION FOR FIRST NAME
  if (!firstname_re.test(firstname.value)) {
    firstNameValid.classList.add("notValid");
    firstNameText.classList.add("textNotValid");
    firstNameText.innerHTML = "NAME NOT VALID";
    isValid = false;
  } else {
    firstNameValid.classList.remove("notValid");
    firstNameText.classList.remove("textNotValid");
    firstNameText.innerHTML = "FIRST NAME";
  }

  // REGULAR EXPRESSION FOR LAST NAME
  if (!lastname_re.test(lastname.value)) {
    lastNameValid.classList.add("notValid");
    lastNameText.classList.add("textNotValid");
    lastNameText.innerHTML = "LAST NAME  NOT VALID";
    isValid = false;
  } else {
    lastNameValid.classList.remove("notValid");
    lastNameText.classList.remove("textNotValid");
    lastNameText.innerHTML = "LAST NAME";
  }

  // REGULAR EXPRESSION FOR EMAIL NAME
  if (!email_re.test(email.value)) {
    emailValid.classList.add("notValid");
    emailText.classList.add("textNotValid");
    emailText.innerHTML = "EMAIL NOT VALID";
    isValid = false;
  } else {
    emailValid.classList.remove("notValid");
    emailText.classList.remove("textNotValid");
    emailText.innerHTML = "EMAIL";
  }

  // REGULAR EXPRESSION FOR PHONE
  if (!phone_re.test(phone.value)) {
    phoneValid.classList.add("notValid");
    phoneText.classList.add("textNotValid");
    phoneText.innerHTML = "PHONE NOT VALID";
    isValid = false;
  } else {
    phoneValid.classList.remove("notValid");
    phoneText.classList.remove("textNotValid");
    phoneText.innerHTML = "PHONE";
  }
  // REGULAR EXPRESSION FOR TEXT
  if (!text_re.test(text.value)) {
    textValid.classList.add("notValid");
    isValid = false;
  } else {
    textValid.classList.remove("notValid");
  }
  if (!isValid) event.preventDefault();
});
