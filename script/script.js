const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  disabledButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const profileEditButton = document.querySelector('.profile__edit');
const profilePopup = document.querySelector('.popup_profile-edit');

const profileEditForm = document.forms.profile;
const profileEditInputs = Array.from(profileEditForm.querySelectorAll(config.inputSelector));
const inputName = profileEditForm.name;
const inputCaption = profileEditForm.caption;

const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');

const cardsContainer = document.querySelector('.cards');

const cardsAddButton = document.querySelector('.profile__add');
const cardAddPopup = document.querySelector('.popup_card-add');

const cardAddForm = document.forms.upload;
const cardAddInputs = Array.from(cardAddForm.querySelectorAll(config.inputSelector));
const cardName = cardAddForm.location;
const cardLink = cardAddForm.link;

const cardImgPopup = document.querySelector('.popup_image');
const previewImg = document.querySelector('.image-view__pic');
const previewTitle = document.querySelector('.image-view__title');

const template = document.querySelector('.card-template').content;

function openPopup(popup) {
  popup.classList.add ('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove ('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function clearPopup(popup, config) {
  const formElement = popup.querySelector(config.formSelector);
  formElement.reset();
  cleanInput(formElement, config);
}

function createCard(card) {
  const newCard = template.querySelector('.card').cloneNode(true);
  const cardPopupImg = newCard.querySelector('.card__image');

  newCard.querySelector('.card__title').textContent = card.name;
  cardPopupImg.src = card.link;
  cardPopupImg.alt = card.name;

  newCard.querySelector('.card__reaction').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__reaction_active');
  });

  newCard.querySelector('.card__delete').addEventListener('click', function(evt) {
    newCard.remove();
  });

  cardPopupImg.addEventListener('click', function(evt) {
    previewImg.src = card.link;
    previewImg.alt = card.name;
    previewTitle.textContent = card.name;
    openPopup(cardImgPopup);
  });

  return newCard;
}

function renderCard(card) {
  cardsContainer.prepend(createCard(card));
}

function closePopups() {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
        closePopup(popup);
      }
    })
  });
}

function submitCard(evt) {
  evt.preventDefault();
  const card = { name: cardName.value, link: cardLink.value };
  renderCard(card);
  closePopup(cardAddPopup);
}

function submitEdits(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileCaption.textContent = inputCaption.value;
  closePopup(profilePopup);
}

function openEdits() {
  openPopup(profilePopup, config);
  clearPopup(profilePopup, config);
  inputName.value = profileName.textContent;
  inputCaption.value = profileCaption.textContent;
  enableButton(profileEditForm.save, config.disabledButtonClass);
}

function openUpload() {
  openPopup(cardAddPopup, config);
  clearPopup(cardAddPopup, config);
  disableButton(cardAddForm.load, config.disabledButtonClass);
}

profileEditButton.addEventListener('click', openEdits);

profileEditForm.addEventListener('submit', submitEdits);

cardsAddButton.addEventListener('click', openUpload);

cardAddForm.addEventListener('submit', submitCard);

initialCards.forEach(renderCard);

closePopups();

enableValidation(config);

