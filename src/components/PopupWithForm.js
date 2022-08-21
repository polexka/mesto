import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._form = this._popupElement.querySelector('.form');
    this._submitCallback = submitCallback;
    this._inputList = Array.from(this._form.querySelectorAll('.form__input'))
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
    this._getInputValues();
    this._submitCallback(this._getInputValues());
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submit.bind(this));
  }

  close() {
    super.close();
    this._form.reset();
  }
}

