import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, confirmCallback) {
    super(popupSelector);
    this._button = this._popupElement.querySelector('.form__submit');
    this._confirmCallback = confirmCallback;
    this._confirm = this._confirm.bind(this);
  }

  _confirm() {
    this._confirmCallback(this._triggerElement, this._triggerId);
    this.close();
  }

  open(element, id) {
    super.open();
    this._triggerElement = element;
    this._triggerId = id;
    this._button.addEventListener('click', this._confirm);
  }

  close() {
    super.close();
    this._button.removeEventListener('click', this._confirm);
  }
}
