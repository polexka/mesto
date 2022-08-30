export default class UserInfo {
  constructor({usernameSelector, profileSelector, avatarSelector}) {
    this._username = document.querySelector(usernameSelector);
    this._profile = document.querySelector(profileSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: `${this._username.textContent}`,
      caption: `${this._profile.textContent}`
    }
  }

  setUserInfo({username, caption}) {
    this._username.textContent = username;
    this._profile.textContent = caption;
  }

  setAvatar(avatar) {
    this._avatar.src = avatar;
  }

  setId(id) {
    this._id = id;
  }

  getId() {
    return this._id;
  }
}
