const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  disabledButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const profileEditButton = document.querySelector('.profile__edit');
const cardTemplateSelector = '.card-template';
const profilePopupSelector = '.popup_profile-edit';
const profileNameSelector = '.profile__name';
const profileCaptionSelector = '.profile__caption';
const cardsContainerSelector = '.cards';
const cardsAddButton = document.querySelector('.profile__add');
const cardUploadSelector = '.popup_card-add';
const imagePopupSelector = '.popup_image';

export {
  config,
  profileEditButton,
  cardsAddButton,
  cardsContainerSelector,
  imagePopupSelector,
  profilePopupSelector,
  cardUploadSelector,
  profileNameSelector,
  profileCaptionSelector,
  cardTemplateSelector
}
