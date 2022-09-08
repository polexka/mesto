import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, confirmCallback) {
    super(popupSelector);
    this._button = this._popupElement.querySelector('.form__submit');
    this._confirmCallback = confirmCallback;
    this._confirm = this._confirm.bind(this);
  }

  _confirm(element, id) {
    this._confirmCallback(element, id);
    this.close();
  }

  open(element, id) {
    super.open();
    this._button.addEventListener('click', () => {
      this._confirm(element, id);
    });
  }

  close() {
    super.close();
  }
}
