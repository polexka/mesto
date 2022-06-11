let open = document.querySelector('.profile__edit-btn')
let close = document.querySelector('.popup__close-btn');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__info__name');
let profileCaption = document.querySelector('.profile__info__caption');
let editForm = document.querySelector('.input');
let inputName = document.querySelector('.input__text_type_title');
let inputCaption = document.querySelector('.input__text_type_caption');

function popupClose() {
  popup.classList.remove ('popup__opened');
}

function profileEdit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileCaption.textContent = inputCaption.value;
  popupClose();
}

function popupOpen() {
  popup.classList.add ('popup__opened');
  inputName.value = profileName.textContent;
  inputCaption.value = profileCaption.textContent;
  editForm.addEventListener('submit', profileEdit);
  close.addEventListener('click', popupClose);
}

open.addEventListener('click', popupOpen);
