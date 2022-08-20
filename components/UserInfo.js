export default class UserInfo {
  constructor({usernameSelector, profileSelector}) {
    this._username = document.querySelector(usernameSelector);
    this._profile = document.querySelector(profileSelector);
  }

  // возвращает нам {name, caption}, которые нужно подставить в profilePopup при открытии
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
}
