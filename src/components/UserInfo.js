export default class UserInfo {
  constructor({usernameSelector, profileSelector, avatarSelector}) {
    this._username = document.querySelector(usernameSelector);
    this._profile = document.querySelector(profileSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: `${this._username.textContent}`,
      about: `${this._profile.textContent}`
    }
  }

  setUserInfo({name, about}) {
    this._username.textContent = name;
    this._profile.textContent = about;
  }

  setAvatar({avatar}) {
    this._avatar.src = avatar;
  }

  setId({_id}) {
    this._id = _id;
  }

  getId() {
    return this._id;
  }
}
