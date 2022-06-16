let profileEditButton = document.querySelector('.profile__edit-btn')
let popupCloseButton = document.querySelector('.popup__close-btn');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileCaption = document.querySelector('.profile__caption');
let editForm = document.querySelector('.input');
let inputName = editForm.querySelector('.input__text_type_title');
let inputCaption = editForm.querySelector('.input__text_type_caption');

function popupClose() {
  popup.classList.remove ('popup_opened');
}

function profileEdit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileCaption.textContent = inputCaption.value;
  popupClose();
}

function popupOpen() {
  inputName.value = profileName.textContent;
  inputCaption.value = profileCaption.textContent;
  popup.classList.add ('popup_opened');
}

profileEditButton.addEventListener('click', popupOpen);
editForm.addEventListener('submit', profileEdit);
popupCloseButton.addEventListener('click', popupClose);
