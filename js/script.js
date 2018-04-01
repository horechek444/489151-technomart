/* Модальное окно по кнопке "Напишите нам" */
if(document.querySelector(".button-write")) {
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
    storageLogin = localStorage.getItem("login");
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

  buttonWrite.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupIndex.classList.add("modal-show");

    if (storageLogin) {
      login.value = storageLogin;

      if (storageEmail) {
        email.value = storageEmail;
        letter.focus();
      } else {
        email.focus();
      }
    }
    else if (storageEmail) {
      email.value = storageEmail;
    }
    else {
      login.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupIndex.classList.remove("modal-show");
    popupIndex.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !letter.value) {
      evt.preventDefault();
      popupIndex.classList.remove("modal-error");
      popupIndex.offsetWidth = popupIndex.offsetWidth;
      popupIndex.classList.add("modal-error");
    } else {
      if (isStorageSupport){
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupIndex.classList.contains("modal-show")) {
        popupIndex.classList.remove("modal-show");
        popupIndex.classList.remove("modal-error");
      }
    }
  });
}

/* Карта */
if(document.querySelector(".contacts-button-map")) {
  var mapLink = document.querySelector(".contacts-button-map");
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
      }
    }
  });
}

/* Слайдер */
if(document.querySelector(".gallery")) {
  var buttonNext = document.querySelector(".gallery-button-next");
  var buttonBack = document.querySelector(".gallery-button-back");
  var drillControl = document.querySelector(".control-drill");
  var perfControl = document.querySelector(".control-perf");
  var perf = document.querySelector(".gallery-item-perf");
  var drill = document.querySelector(".gallery-item-drill");

  buttonNext.addEventListener("click", function (evt) {
    evt.preventDefault();
    drill.classList.remove("gallery-show");
    perf.classList.add("gallery-show");
    drillControl.classList.remove("active");
    perfControl.classList.add("active");
  });

  buttonBack.addEventListener("click", function (evt) {
    evt.preventDefault();
    perf.classList.remove("gallery-show");
    drill.classList.add("gallery-show");
    perfControl.classList.remove("active");
    drillControl.classList.add("active");
  });

  drillControl.addEventListener("click", function (evt) {
    evt.preventDefault();
    drill.classList.add("gallery-show");
    perf.classList.remove("gallery-show");
    perfControl.classList.remove("active");
    drillControl.classList.add("active");
  });

  perfControl.addEventListener("click", function (evt) {
    evt.preventDefault();
    perf.classList.add("gallery-show");
    drill.classList.remove("gallery-show");
    drillControl.classList.remove("active");
    perfControl.classList.add("active");
  });
}

/* Сервисы */
if(document.querySelector(".services")) {
  var service = document.querySelectorAll(".services-item");
  var serviceDescription = document.querySelectorAll(".description-item");

  for (var i = 0; i < service.length; i++) {
    var serviceItem = service[i];

    serviceItem.addEventListener("click", function () {

      if (!this.classList.contains("services-item-current")) {
        for (var k = 0; k < service.length; k++) {
          service[k].classList.remove("services-item-current");
          serviceDescription[k].classList.remove("description-item-show");
        }
        var currentItem = this.dataset.count;
        serviceDescription[currentItem].classList.add("description-item-show");
        this.classList.add("services-item-current");
      }
    });
  }
}

/* Модальное окно каталога */
if(document.querySelector(".modal-product-to-basket")) {
  var catalogCart = document.querySelectorAll(".main-checkout");
  var catalogPopup = document.querySelector(".modal-product-to-basket");
  var catalogClose = catalogPopup.querySelector(".modal-close");
  var catalogCheck = catalogPopup.querySelector(".button-checkout");
  var catalogContinue = catalogPopup.querySelector(".button-continue");

  for (var i = 0; i < catalogCart.length; i++) {
    catalogCart[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      catalogPopup.classList.add("modal-show");
    });
  }

  catalogClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    catalogPopup.classList.remove("modal-show");
  });

  catalogCheck.addEventListener("click", function (evt) {
    evt.preventDefault();
    catalogPopup.classList.remove("modal-show");
  });

  catalogContinue.addEventListener("click", function (evt) {
    evt.preventDefault();
    catalogPopup.classList.remove("modal-show");
  });
}
