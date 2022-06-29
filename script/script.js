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
const profilePopup = document.querySelector('.popup_profile-edit');

const profileEditForm = document.querySelector('.form_profile-edit');
const inputName = profileEditForm.querySelector('.form__text_type_title');
const inputCaption = profileEditForm.querySelector('.form__text_type_caption');

const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');

const cardsContainer = document.querySelector('.cards');

const cardsAddButton = document.querySelector('.profile__add-btn');
const cardsAddCloseButton = document.querySelector('.popup__close-btn_cards-add');
const cardAddPopup = document.querySelector('.popup_card-add');

const cardAddForm = document.querySelector('.form_card-add');
const cardName = cardAddForm.querySelector('.form__text_type_card-title');
const cardLink = cardAddForm.querySelector('.form__text_type_card-link');

const cardImgPopup = document.querySelector('.popup_image');
const previewCloseButton = document.querySelector('.popup__close-btn_image-view');
const previewImg = document.querySelector('.image-view__pic');
const previewTitle = document.querySelector('.image-view__title');

const template = document.querySelector('.card-template').content;

function openPopup(item) {
  item.classList.add ('popup_opened');
}

function closePopup(item) {
  item.classList.remove ('popup_opened');
}

function createCard(item) {
  const newCard = template.querySelector('.card').cloneNode(true);
  const cardPopupImg = newCard.querySelector('.card__image');

  newCard.querySelector('.card__title').textContent = item.name;
  cardPopupImg.src = item.link;
  cardPopupImg.alt = item.name;

  newCard.querySelector('.card__reaction').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__reaction_active');
  });

  newCard.querySelector('.card__delete').addEventListener('click', function(evt) {
    newCard.remove();
  });

  cardPopupImg.addEventListener('click', function(evt) {
    previewImg.src = item.link;
    previewImg.alt = item.name;
    previewTitle.textContent = item.name;

    openPopup(cardImgPopup);
  });

  return newCard;
}

function renderCard(item) {
  cardsContainer.prepend(createCard(item));
}

profileEditButton.addEventListener('click', function() {
  inputName.value = profileName.textContent;
  inputCaption.value = profileCaption.textContent;
  openPopup(profilePopup);
});

profileEditForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileCaption.textContent = inputCaption.value;
  closePopup(profilePopup);
});

profileEditCloseButton.addEventListener('click', function() {
  closePopup(profilePopup)
});

cardsAddButton.addEventListener('click', function() {
  openPopup(cardAddPopup);
});

cardAddForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const item = { name: cardName.value, link: cardLink.value };
  renderCard(item);

  closePopup(cardAddPopup);

  cardName.value = '';
  cardLink.value = '';
});

cardsAddCloseButton.addEventListener('click', function() {
  closePopup(cardAddPopup);
});

//beb

previewCloseButton.addEventListener('click', function() {
  closePopup(cardImgPopup);
});

initialCards.forEach(renderCard);
