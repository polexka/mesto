import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {initialCards} from '../utils/cards.js'
import {
  config,
  profileEditButton,
  cardsAddButton,
  cardsContainerSelector,
  imagePopupSelector,
  profilePopupSelector,
  cardUploadSelector,
  profileNameSelector,
  profileCaptionSelector
} from '../utils/constants.js'

const userInfo = new UserInfo({
  usernameSelector: profileNameSelector,
  profileSelector: profileCaptionSelector
});

const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  })
}

enableValidation(config);

const imagePopup = new PopupWithImage (imagePopupSelector);
imagePopup.setEventListeners();

const handleImgClick = ({title, link}) => {
  imagePopup.open({title, link});
}

const cardList = new Section (
  {data: initialCards,
  renderer: (item) => {
    const card = new Card(
      item,
      handleImgClick,
      '.card-template'
    );
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }}, cardsContainerSelector
);

cardList.renderItems();

function profileSubmitCallback({name, caption}) {
  userInfo.setUserInfo({
    username: name,
    caption: caption
  });
}

const profilePopup = new PopupWithForm( profilePopupSelector, profileSubmitCallback );
profilePopup.setEventListeners();
profileEditButton.addEventListener('click', () => {
  profilePopup.open(userInfo.getUserInfo());
  formValidators.profile.resetValidation();
  formValidators.profile.disableButton();
});

function cardUploadCallback ({location, link}) {
  const card = {
    name: location,
    link: link
  };
  initialCards.push(card);
  cardList.renderItems();
}

const uploadPopup = new PopupWithForm( cardUploadSelector, cardUploadCallback);
uploadPopup.setEventListeners();
cardsAddButton.addEventListener('click', () => {
  uploadPopup.open();
  formValidators.upload.resetValidation();
});
