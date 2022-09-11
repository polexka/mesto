export default class Card {
  constructor(data, handleImgClick, templateSelector, deleteCallback, reactionCallback, userId) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likesCount = (data.likes) ? data.likes.length : 0;
    this._isLiked = (data.likes) ? data.likes.some((element) => element._id == userId) : false;
    this._access = (data.owner._id == userId) ? true : false;
    this._templateSelector = templateSelector;
    this._handleImgClick = handleImgClick;
    this._reactionCallback = reactionCallback;
    this._reaction = this._reaction.bind(this);
    this._deleteCallback = deleteCallback;
    this._delete = this._delete.bind(this);
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

  _reaction(evt) {
    this._reactionCallback(this._id, evt.target, evt.target.classList.contains('card__reaction_active'), this._likes);
  }

  _delete() {
    this._deleteCallback(this._element, this._id);
  }

  _imageClickCallback() {
    this._handleImgClick({
      title: this._name,
      link: this._link
    });
  }

  _setEventListeners() {
    this._element.querySelector('.card__reaction').addEventListener('click',this._reaction);

    if (this._access) {
      this._element.querySelector('.card__delete').addEventListener('click', this._delete);
    } else {
      this._element.querySelector('.card__delete').remove();
    }

    this._image.addEventListener('click', this._imageClickCallback);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likes = this._element.querySelector('.card__reaction-count');
    this._likes.textContent = this._likesCount;
    this._image =  this._element.querySelector('.card__image');
    if (this._isLiked) {
      this._element.querySelector('.card__reaction').classList.add('card__reaction_active')
    }
    this._setEventListeners();

    this._image.src = this._link;
    this._image.alt = 'Изображение: ' + this._name;
    this._element.querySelector('.card__title').textContent = this._name;

    return this._element;
  }

}
