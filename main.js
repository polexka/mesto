(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o,r,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._id=e._id,this._likesCount=e.likes?e.likes.length:0,this._isLiked=!!e.likes&&e.likes.some((function(e){return e._id==a})),this._access=e.owner._id==a,this._templateSelector=o,this._handleImgClick=n,this._reactionCallback=i,this._reaction=this._reaction.bind(this),this._deleteCallback=r,this._delete=this._delete.bind(this),this._imageClickCallback=this._imageClickCallback.bind(this)}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_reaction",value:function(e){e.target.classList.toggle("card__reaction_active"),e.target.classList.contains("card__reaction_active")?this._likes.textContent=parseInt(this._likes.textContent,10)+1:this._likes.textContent=parseInt(this._likes.textContent,10)-1,this._reactionCallback(this._id,e.target.classList.contains("card__reaction_active"))}},{key:"_delete",value:function(){this._deleteCallback(this._element,this._id)}},{key:"_imageClickCallback",value:function(){this._handleImgClick({title:this._name,link:this._link})}},{key:"_setEventListeners",value:function(){this._element.querySelector(".card__reaction").addEventListener("click",this._reaction),this._access?this._element.querySelector(".card__delete").addEventListener("click",this._delete):this._element.querySelector(".card__delete").remove(),this._image.addEventListener("click",this._imageClickCallback)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likes=this._element.querySelector(".card__reaction-count"),this._likes.textContent=this._likesCount,this._image=this._element.querySelector(".card__image"),this._isLiked&&this._element.querySelector(".card__reaction").classList.add("card__reaction_active"),this._setEventListeners(),this._image.src=this._link,this._image.alt="Изображение: "+this._name,this._element.querySelector(".card__title").textContent=this._name,this._element}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._disabledButtonClass=t.disabledButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var t,o;return t=e,(o=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"enableButton",value:function(){this._buttonElement.classList.remove(this._disabledButtonClass),this._buttonElement.disabled=!1}},{key:"disableButton",value:function(){this._buttonElement.classList.add(this._disabledButtonClass),this._buttonElement.disabled=!0}},{key:"_toggleButton",value:function(){this._hasInvalidInput()?this.disableButton():this.enableButton()}},{key:"_showError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}},{key:"enableValidation",value:function(){var e=this;this._toggleButton(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButton()}))}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideError(t)}))}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mouseup",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=f(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},u.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(o);if(r){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popupElement.querySelector(".image-view__pic"),t._title=t._popupElement.querySelector(".image-view__title"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.title,n=e.link;this._image.src=n,this._image.alt=t,this._title.textContent=t,u(d(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=v(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},b.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(o);if(r){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._form=n._popupElement.querySelector(".form"),n._submitCallback=t,n._inputList=Array.from(n._form.querySelectorAll(".form__input")),n._submit=n._submit.bind(E(n)),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"_submit",value:function(e){e.preventDefault(),this._submitCallback(this._getInputValues()),this.close()}},{key:"setEventListeners",value:function(){b(w(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submit)}},{key:"close",value:function(){b(w(a.prototype),"close",this).call(this),this._form.reset()}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=P(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},j.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function L(e,t){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},L(e,t)}function I(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return q(e)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(o);if(r){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._button=n._popupElement.querySelector(".confirm"),n._confirmCallback=t,n._confirm=n._confirm.bind(q(n)),n}return t=a,(n=[{key:"_confirm",value:function(e,t){this._confirmCallback(e,t),this.close()}},{key:"open",value:function(e,t){var n=this;j(R(a.prototype),"open",this).call(this),console.log("opened popup"),this._button.addEventListener("click",(function(){n._confirm(e,t)}))}},{key:"close",value:function(){j(R(a.prototype),"close",this).call(this)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function B(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var x=function(){function e(t){var n=t.usernameSelector,o=t.profileSelector,r=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._username=document.querySelector(n),this._profile=document.querySelector(o),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:"".concat(this._username.textContent),caption:"".concat(this._profile.textContent)}}},{key:"setUserInfo",value:function(e){var t=e.username,n=e.caption;this._username.textContent=t,this._profile.textContent=n}},{key:"setAvatar",value:function(e){this._avatar.src=e}},{key:"setId",value:function(e){this._id=e}},{key:"getId",value:function(){return this._id}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),A=document.querySelector(".profile__edit"),V=document.querySelector(".profile__add"),D=document.querySelector(".profile__image-wrap"),z=new x({usernameSelector:".profile__name",profileSelector:".profile__caption",avatarSelector:".profile__image"});fetch("https://mesto.nomoreparties.co/v1/cohort-48/users/me",{method:"GET",headers:{authorization:"3148a268-7143-49db-8834-70af504db3e1"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка авторизации: ".concat(e.status))})).then((function(e){z.setUserInfo({username:e.name,caption:e.about}),z.setAvatar(e.avatar),z.setId(e._id)})).catch((function(e){console.log(e)}));var U,N={};U={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",disabledButtonClass:"form__submit_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},Array.from(document.querySelectorAll(U.formSelector)).forEach((function(e){var t=new o(U,e),n=e.getAttribute("name");N[n]=t,t.enableValidation()}));var J=new O(".popup_avatar",(function(e){var t=e.avatar;console.log(t),fetch("https://mesto.nomoreparties.co/v1/cohort-48/users/me/avatar",{method:"PATCH",headers:{authorization:"3148a268-7143-49db-8834-70af504db3e1","Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка установки аватара: ".concat(e.status))})).then((function(e){z.setAvatar(e.avatar),console.log(e)})).catch((function(e){console.log(e)}))}));J.setEventListeners(),D.addEventListener("click",(function(){N.upload.disableButton(),J.open(),N.upload.resetValidation()}));var G=new _(".popup_image");G.setEventListeners();var H=new T(".popup_delete",(function(e,t){e.remove(),e=null,fetch("https://mesto.nomoreparties.co/v1/cohort-48/cards/".concat(t),{method:"DELETE",headers:{authorization:"3148a268-7143-49db-8834-70af504db3e1"}})}));H.setEventListeners();var M=function(e){var t=e.title,n=e.link;G.open({title:t,link:n})};function F(e,t){H.open(e,t)}function K(e,t){console.log("reactionCallback worked"),t?fetch("https://mesto.nomoreparties.co/v1/cohort-48/cards/".concat(e,"/likes"),{method:"PUT",headers:{authorization:"3148a268-7143-49db-8834-70af504db3e1"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка установки лайка: ".concat(e.status))})).catch((function(e){console.log(e)})):fetch("https://mesto.nomoreparties.co/v1/cohort-48/cards/".concat(e,"/likes"),{method:"DELETE",headers:{authorization:"3148a268-7143-49db-8834-70af504db3e1"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка убирания лайка: ".concat(e.status))})).catch((function(e){console.log(e)}))}var Q=function(e){W.addItem(function(e){return new t(e,M,".card-template",F,K,z.getId()).generateCard()}(e))},W=new i(Q,".cards");fetch("https://mesto.nomoreparties.co/v1/cohort-48/cards",{method:"GET",headers:{authorization:"3148a268-7143-49db-8834-70af504db3e1"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка получения карточек: ".concat(e.status))})).then((function(e){W.renderItems(e.reverse()),console.log(e[1].owner._id),console.log("user id ",z.getId())})).catch((function(e){console.log(e)}));var X=new O(".popup_profile-edit",(function(e){var t=e.name,n=e.caption;z.setUserInfo({username:t,caption:n}),fetch("https://mesto.nomoreparties.co/v1/cohort-48/users/me",{method:"PATCH",headers:{authorization:"3148a268-7143-49db-8834-70af504db3e1","Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})})}));X.setEventListeners(),A.addEventListener("click",(function(){X.open(),X.setInputValues(z.getUserInfo()),N.profile.resetValidation(),N.profile.disableButton()}));var Y=new O(".popup_card-add",(function(e){var t=e.location,n=e.link,o={name:t,link:n,owner:{_id:z.getId()}};Q(o),fetch("https://mesto.nomoreparties.co/v1/cohort-48/cards",{method:"POST",headers:{authorization:"3148a268-7143-49db-8834-70af504db3e1","Content-Type":"application/json"},body:JSON.stringify({name:t,link:n,owner:{_id:z.getId()}})})}));Y.setEventListeners(),V.addEventListener("click",(function(){N.upload.disableButton(),Y.open(),N.upload.resetValidation()}))})();