import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._form = this._popupElement.querySelector('.form');
    this._submitCallback = submitCallback;
  }

  _getInputValues() {
    const inputValues = {}
    const inputList = Array.from(this._form.querySelectorAll('.form__input'));
    inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    })
    return inputValues;
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

  open({name, caption} = {}) {
    super.open();
    
    const inputValues = this._getInputValues();
    if (inputValues.hasOwnProperty('caption')) {
      this._form.name.value = name;
      this._form.caption.value = caption;
    }
  }

  close() {
    super.close();
    this._form.reset();
  }
}

