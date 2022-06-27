const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const profileEditButton = document.querySelector('.profile__edit-btn');
const profileEditCloseButton = document.querySelector('.popup__close-btn_profile-edit');
let profilePopup = document.querySelector('.popup_profile-edit');

let profileEditForm = document.querySelector('.form_profile-edit');
let inputName = profileEditForm.querySelector('.form__text_type_title');
let inputCaption = profileEditForm.querySelector('.form__text_type_caption');

let profileName = document.querySelector('.profile__name');
let profileCaption = document.querySelector('.profile__caption');

let cards = document.querySelector('.cards');

const cardsAddButton = document.querySelector('.profile__add-btn');
const cardsAddCloseButton = document.querySelector('.popup__close-btn_cards-add');
let cardAddPopup = document.querySelector('.popup_card-add');

let cardAddForm = document.querySelector('.form_card-add');
let cardName = cardAddForm.querySelector('.form__text_type_card-title');
let cardLink = cardAddForm.querySelector('.form__text_type_card-link');

function popupOpen(item) {
  item.classList.add ('popup_opened');
}

function popupClose(item) {
  item.classList.remove ('popup_opened');
}

function renderCard(item) {
  let cardImgPopup = document.querySelector('.popup_image');
  const previewCloseButton = document.querySelector('.popup__close-btn_image-view');
  let previewImg = document.querySelector('.image-view__pic');
  let previewTitle = document.querySelector('.image-view__title');

  const template = document.querySelector('.card-template').content;
  const newCard = template.querySelector('.card').cloneNode(true);

  newCard.querySelector('.card__title').textContent = item.name;
  newCard.querySelector('.card__image').src = item.link;
  newCard.querySelector('.card__image').alt = item.name;

  newCard.querySelector('.card__reaction').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__reaction_active');
  });

  newCard.querySelector('.card__delete').addEventListener('click', function(evt) {
    newCard.remove();
  });

  newCard.querySelector('.card__image').addEventListener('click', function(evt) {
    previewCloseButton.addEventListener('click', function() {
      popupClose(cardImgPopup);
    });

    previewImg.src = item.link;
    previewImg.alt = item.name;
    previewTitle.textContent = item.name;

    popupOpen(cardImgPopup);
  });

  cards.prepend(newCard);
}

profileEditButton.addEventListener('click', function() {
  inputName.value = profileName.textContent;
  inputCaption.value = profileCaption.textContent;
  popupOpen(profilePopup);
});

profileEditForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileCaption.textContent = inputCaption.value;
  popupClose(profilePopup);
});

profileEditCloseButton.addEventListener('click', function() {
  popupClose(profilePopup)
});

cardsAddButton.addEventListener('click', function() {
  popupOpen(cardAddPopup);
});

cardAddForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const item = { name: cardName.value, link: cardLink.value };
  renderCard(item);
  popupClose(cardAddPopup);
});

cardsAddCloseButton.addEventListener('click', function() {
  popupClose(cardAddPopup);
});

initialCards.forEach(renderCard);
