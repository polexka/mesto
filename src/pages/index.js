import './index.css';

import Api from '../components/Api';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';

import {
  config,
  profileEditButton,
  cardsAddButton,
  cardsContainerSelector,
  imagePopupSelector,
  profilePopupSelector,
  cardUploadSelector,
  profileNameSelector,
  profileCaptionSelector,
  cardTemplateSelector,
  avatarSelector,
  deleteSelector,
  avatarLoadSelector,
  avatarLoadButton,
  token,
  baseUrl
} from '../utils/constants.js';

const formValidators = {};

const api = new Api({
  baseUrl: baseUrl,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo({
  usernameSelector: profileNameSelector,
  profileSelector: profileCaptionSelector,
  avatarSelector: avatarSelector
});

function setUser(info) {
  userInfo.setUserInfo(info);
  userInfo.setAvatar(info);
  userInfo.setId(info);
}

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([userData, cards]) => {
  setUser(userData);
  cardList.renderItems(cards.reverse())
})
.catch((err) => {
  console.log(`Ошибка авторизации & получения массива карточек: ${err}`);
});

function avatarSubmitCallback({ avatar }) {
  avatarPopup.renderLoading(true);
  api.updateAvatar(avatar)
    .then((res) => {
      userInfo.setAvatar(res);
      avatarPopup.close();
    })
    .catch((err) => {
      console.log(`Ошибка установки аватара: ${err}`);
    })
    .finally(() => {
      avatarPopup.renderLoading(false);
    })
}

const avatarPopup = new PopupWithForm(avatarLoadSelector, avatarSubmitCallback);
avatarPopup.setEventListeners();
avatarLoadButton.addEventListener('click', () => {
  formValidators.upload.disableButton();
  avatarPopup.open();
  formValidators.upload.resetValidation();
})

const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

function confirmCallback(element, id) {
  api.deleteCard(id)
    .then(() => {
      element.remove();
      element = null;
      deletePopup.close();
    })
    .catch((err) => {
      console.log(`Ошибка удаления карточки: ${err}`);
    });
}

const deletePopup = new PopupWithConfirmation(deleteSelector, confirmCallback);
deletePopup.setEventListeners();

const handleImgClick = (data) => {
  imagePopup.open(data);
}

function deleteCallback(element, id) {
  deletePopup.open(element, id);
}

function reactionResponseCallback(data, element, likeCounter) {
  likeCounter.textContent = data.likes.length;
  element.classList.toggle('card__reaction_active');
}

function reactionCallback(id, element, isLiked, likeCounter) {
  if (isLiked) {
    api.deleteLike(id)
    .then((res) => {
      reactionResponseCallback(res, element, likeCounter);
    })
      .catch((err) => {
        console.log(`Ошибка удаления лайка: ${err}`);
      });
  } else {
    api.putLike(id)
    .then((res) => {
      reactionResponseCallback(res, element, likeCounter);
    })
      .catch((err) => {
        console.log(`Ошибка установки лайка: ${err}`);
      });
  }
}

const createCard = (item) => {
  const card = new Card(
    item,
    handleImgClick,
    cardTemplateSelector,
    deleteCallback,
    reactionCallback,
    userInfo.getId()
  )
  return card.generateCard();
}

const cardListRenderer = (item) => {
  cardList.addItem(createCard(item))
}

const cardList = new Section(
  cardListRenderer,
  cardsContainerSelector
);

function profileSubmitCallback(data) {
  profilePopup.renderLoading(true);
  api.updateUserInfo(data)
    .then((res) => {
      userInfo.setUserInfo(res);
      profilePopup.close();
    })
    .catch((err) => {
      console.log(`Ошибка обновления пользовательской информации: ${err}`);
    })
    .finally(() => {
      profilePopup.renderLoading(false);
    })
}

const profilePopup = new PopupWithForm(profilePopupSelector, profileSubmitCallback);
profilePopup.setEventListeners();
profileEditButton.addEventListener('click', () => {
  profilePopup.open();
  profilePopup.setInputValues(userInfo.getUserInfo());
  formValidators.profile.resetValidation();
  formValidators.profile.disableButton();
});

function cardUploadCallback(data) {
  uploadPopup.renderLoading(true);
  api.uploadCard(data)
    .then((res) => {
      cardListRenderer(res);
      uploadPopup.close();
    })
    .catch((err) => {
      console.log(`Ошибка добавления карточки: ${err}`);
    })
    .finally(() => {
      uploadPopup.renderLoading(false);
    })
}

const uploadPopup = new PopupWithForm(cardUploadSelector, cardUploadCallback);
uploadPopup.setEventListeners();
cardsAddButton.addEventListener('click', () => {
  formValidators.upload.disableButton();
  uploadPopup.open();
  formValidators.upload.resetValidation();
});

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  })
};

enableValidation(config);
