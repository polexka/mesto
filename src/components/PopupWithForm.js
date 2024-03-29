import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._form = this._popupElement.querySelector('.form');
    this._button = this._form.querySelector('.form__submit');
    this._baseButtonState = this._button.textContent;
    this._submitCallback = submitCallback;
    this._inputList = Array.from(this._form.querySelectorAll('.form__input'));
    this._submit = this._submit.bind(this);
  }

  _getInputValues() {
    const inputValues = {}
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    })
    return inputValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    })
  }

  _submit(evt) {
    evt.preventDefault();
    this._submitCallback(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submit);
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._button.textContent = 'Сохранение...';
    } else {
      this._button.textContent = this._baseButtonState;
    }
  }
}

