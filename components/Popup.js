// отвечает за открытие и закрытие попапа
export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    // не убираетя слшутаель событий
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape' ) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener('mouseup', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
        this.close();
      }
    })
  }
}
