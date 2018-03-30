var buttonWrite = document.querySelector(".button-write");
var popupIndex = document.querySelector(".modal-write-us");
var close = popupIndex.querySelector(".modal-close");

var form = popupIndex.querySelector("form");
var login = popupIndex.querySelector("[name=login]");
var email = popupIndex.querySelector("[name=email]");
var letter = popupIndex.querySelector("[name=letter]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

buttonWrite.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupIndex.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    email.value = storage;
    letter.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupIndex.classList.remove("modal-show");
  popupIndex.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || ! email.value) {
    evt.preventDefault();
    popupIndex.classList.remove("modal-error");
    popupIndex.offsetWidth = popupIndex.offsetWidth;
    popupIndex.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value, "email", email.value);
    } }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popupIndex.classList.contains("modal-show")) {
    popupIndex.classList.remove("modal-show");
    popupIndex.classList.remove("modal-error");
  } }
});

var mapLink = document.querySelector(".modal-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    } }
});


