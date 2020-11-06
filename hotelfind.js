const searchhotel = document.querySelector(".searchhotel");
const contentPopup = document.querySelector(".modal-content");
const calendarIn = contentPopup.querySelector(".calendar-in");
const calendarOut = contentPopup.querySelector(".calendar-out");
const appointmentForm = contentPopup.querySelector(".appointment-form");

let isStorageSupport = true;
let storage = "";
try {
  storage = localStorage.getItem("plusminus");
} catch (err) {
  isStorageSupport = false;
}

searchhotel.addEventListener("click", function (evt) {
  evt.preventDefault();
  contentPopup.classList.add("modal-show");
  if (storage) {
  calendarIn.value = storage;
  calendarOut.focus();
  } else {
    calendarIn.focus();
}
  calendarIn.focus();
  calendarOut.focus();

});
appointmentForm.addEventListener("submit", function (evt) {
  if (!calendarIn.value || !calendarOut.value) {
   evt.preventDefault();
    contentPopup.classList.add("modal-error");
 }else {
   if (isStorageSupport) {
    localStorage.setItem("plusminus", calendarIn.value);
  }
}});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contentPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contentPopup.classList.remove("modal-show");
    }
  }
});
