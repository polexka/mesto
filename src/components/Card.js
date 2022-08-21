export default class Card {
  constructor(data, handleImgClick, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleImgClick = handleImgClick;
    this._deleteCallback = this._deleteCallback.bind(this);
    this._imageClickCallback = this._imageClickCallback.bind(this);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _reactionCallback(evt) {
    evt.target.classList.toggle('card__reaction_active');
  }

  _deleteCallback() {
    this._element.remove();
    this._element = null;
  }

  _imageClickCallback() {
    this._handleImgClick({
      title: this._name,
      link: this._link
    });
  }

  _setEventListeners() {
    this._element.querySelector('.card__reaction').addEventListener('click',this._reactionCallback);

    this._element.querySelector('.card__delete').addEventListener('click', this._deleteCallback);

    this._image.addEventListener('click', this._imageClickCallback);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._image =  this._element.querySelector('.card__image');
    this._setEventListeners();

    this._image.src = this._link;
    this._image.alt = 'Изображение: ' + this._name;
    this._element.querySelector('.card__title').textContent = this._name;

    return this._element;
  }

}
