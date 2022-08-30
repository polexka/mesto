import './index.css';

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
  avatarLoadButton
} from '../utils/constants.js';

const userInfo = new UserInfo({
  usernameSelector: profileNameSelector,
  profileSelector: profileCaptionSelector,
  avatarSelector: avatarSelector
});

fetch('https://mesto.nomoreparties.co/v1/cohort-48/users/me', {
  method: 'GET',
  headers: {
    authorization: '3148a268-7143-49db-8834-70af504db3e1'
  }
})
.then((res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка авторизации: ${res.status}`);
})
.then((result) => {
  userInfo.setUserInfo({
    username: result.name,
    caption: result.about
  });
  userInfo.setAvatar(result.avatar);
  userInfo.setId(result._id);
})
.catch((err) => {
    console.log(err); // выведем ошибку в консоль
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

function avatarSubmitCallback({avatar}) {
  console.log(avatar);
  fetch('https://mesto.nomoreparties.co/v1/cohort-48/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: '3148a268-7143-49db-8834-70af504db3e1',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: avatar
    })
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка установки аватара: ${res.status}`);
  })
  .then((res) => {
    userInfo.setAvatar(res.avatar);
    console.log(res);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
}

const avatarPopup = new PopupWithForm (avatarLoadSelector, avatarSubmitCallback);
avatarPopup.setEventListeners();
avatarLoadButton.addEventListener('click', () => {
  formValidators.upload.disableButton();
  avatarPopup.open();
  formValidators.upload.resetValidation();
})

const imagePopup = new PopupWithImage (imagePopupSelector);
imagePopup.setEventListeners();

function confirmCallback(element, id) {
  element.remove();
  element = null;

  fetch(`https://mesto.nomoreparties.co/v1/cohort-48/cards/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: '3148a268-7143-49db-8834-70af504db3e1'
    }
  })
}

const deletePopup = new PopupWithConfirmation(deleteSelector, confirmCallback);
deletePopup.setEventListeners();

const handleImgClick = ({title, link}) => {
  imagePopup.open({title, link});
}

function deleteCallback(element, id) {
  deletePopup.open(element, id);
}

function reactionCallback(id, isLiked) {
  console.log('reactionCallback worked')
  if (!isLiked) {
    fetch(`https://mesto.nomoreparties.co/v1/cohort-48/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: '3148a268-7143-49db-8834-70af504db3e1'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка убирания лайка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
  } else {
    fetch(`https://mesto.nomoreparties.co/v1/cohort-48/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: '3148a268-7143-49db-8834-70af504db3e1'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка установки лайка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
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

const cardList = new Section (
  cardListRenderer,
  cardsContainerSelector
);

fetch('https://mesto.nomoreparties.co/v1/cohort-48/cards', {
  method: 'GET',
  headers: {
    authorization: '3148a268-7143-49db-8834-70af504db3e1'
  }
})
.then((res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка получения карточек: ${res.status}`);
})
.then((result) => {
  cardList.renderItems(result.reverse());
  console.log(result[1].owner._id);
  console.log('user id ', userInfo.getId());
})
.catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

function profileSubmitCallback({name, caption}) {
  userInfo.setUserInfo({
    username: name,
    caption: caption
  });

  fetch('https://mesto.nomoreparties.co/v1/cohort-48/users/me', {
    method: 'PATCH',
    headers: {
      authorization: '3148a268-7143-49db-8834-70af504db3e1',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      about: caption
    })
  })
  // .catch((err) => {
  //   console.log(err); // выведем ошибку в консоль
  // });
}

const profilePopup = new PopupWithForm( profilePopupSelector, profileSubmitCallback );
profilePopup.setEventListeners();
profileEditButton.addEventListener('click', () => {
  profilePopup.open();
  profilePopup.setInputValues(userInfo.getUserInfo());
  formValidators.profile.resetValidation();
  formValidators.profile.disableButton();
});

function cardUploadCallback ({location, link}) {
  const card = {
    name: location,
    link: link,
    owner: {
      _id: userInfo.getId()
    }
  };
  cardListRenderer(card);

  fetch('https://mesto.nomoreparties.co/v1/cohort-48/cards', {
    method: 'POST',
    headers: {
      authorization: '3148a268-7143-49db-8834-70af504db3e1',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: location,
      link: link,
      owner: {
        _id: userInfo.getId()
      }
    })
  })
  // .catch((err) => {
  //   console.log(err); // выведем ошибку в консоль
  // });
}

const uploadPopup = new PopupWithForm( cardUploadSelector, cardUploadCallback);
uploadPopup.setEventListeners();
cardsAddButton.addEventListener('click', () => {
  formValidators.upload.disableButton();
  uploadPopup.open();
  formValidators.upload.resetValidation();
});
