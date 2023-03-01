"use strict";
// SVG ANIMATION
const message = document.getElementById("svg-sendmsg");
const phone = document.getElementById("svg-sendmsg2");
const hour24 = document.getElementById("svg-sendmsg3");

gsap.from(message, { duration: 1, translateX: -1000, delay: 1 });
gsap.from(phone, { duration: 1, translateX: -1000, delay: 0.5 });
gsap.from(hour24, { duration: 1, translateX: -1000, rotation: -360 });

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const vrEmail = document.getElementById("vr_email");
  const phone = document.getElementById("phone");

  // VALIDATION LIST FOR CLASSLIST.ADD
  const firstNameValid = document.getElementById("firstNameValid");
  const lastNameValid = document.getElementById("lastNameValid");
  const emailValid = document.getElementById("emailValid");
  const vrEmailValid = document.getElementById("vrEmailValid");
  const phoneValid = document.getElementById("phoneValid");

  // innerHTML ID LIST
  const firstNameText = document.getElementById("firstNameText");
  const lastNameText = document.getElementById("lastNameText");
  const emailText = document.getElementById("emailText");
  const vrEmailText = document.getElementById("vrEmailText");
  const phoneText = document.getElementById("phoneText");
  const text = document.getElementById("text");

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
    firstNameText.innerText = "NAME NOT VALID";
    isValid = false;
  } else {
    firstNameValid.classList.remove("notValid");
    firstNameText.classList.remove("textNotValid");
    firstNameText.innerText = "FIRST NAME";
  }

  // REGULAR EXPRESSION FOR LAST NAME
  if (!lastname_re.test(lastname.value)) {
    lastNameValid.classList.add("notValid");
    lastNameText.classList.add("textNotValid");
    lastNameText.innerText = "LAST NAME  NOT VALID";
    isValid = false;
  } else {
    lastNameValid.classList.remove("notValid");
    lastNameText.classList.remove("textNotValid");
    lastNameText.innerText = "LAST NAME";
  }

  // REGULAR EXPRESSION FOR EMAIL NAME
  if (!email_re.test(email.value)) {
    emailValid.classList.add("notValid");
    emailText.classList.add("textNotValid");
    emailText.innerText = "EMAIL NOT VALID";
    isValid = false;
  } else {
    emailValid.classList.remove("notValid");
    emailText.classList.remove("textNotValid");
    emailText.innerText = "EMAIL";
  }

  //EMAIL VERIFY
  if (email.value === vrEmail.value) {
    isValid;
    vrEmailValid.classList.remove("notValid");
    vrEmailText.classList.remove("textNotValid");
    vrEmailText.innerText = "VERIFY EMAIL";
  } else {
    vrEmailValid.classList.add("notValid");
    vrEmailText.classList.add("textNotValid");
    vrEmailText.innerText = "EMAIL NOT THE SAME";
    isValid = false;
  }

  // REGULAR EXPRESSION FOR PHONE
  if (!phone_re.test(phone.value)) {
    phoneValid.classList.add("notValid");
    phoneText.classList.add("textNotValid");
    phoneText.innerText = "PHONE NOT VALID";
    isValid = false;
  } else {
    phoneValid.classList.remove("notValid");
    phoneText.classList.remove("textNotValid");
    phoneText.innerText = "PHONE";
  }
  // REGULAR EXPRESSION FOR TEXT
  if (!text_re.test(text.value)) {
    textMsg.classList.add("textNotValid");
    textMsg.innerText = "MESSAGE: TYPE A MESSAGE";
    isValid = false;
  } else {
    textMsg.classList.remove("textNotValid");
    textMsg.innerText = "MESSAGE";
  }

  if (!isValid) event.preventDefault();
});
