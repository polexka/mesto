import skyImage from '../images/sky.jpg';
const cloudImage = new URL('../images/6.jpg', import.meta.url);
const cloudyImage = new URL('../images/5.jpg', import.meta.url);
const seaImage = new URL('../images/2.jpg', import.meta.url);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Камчатка',
    link: seaImage
  },
  {
    name: 'Челябинская область',
    link: cloudyImage
  },
  {
    name: 'Холмогорский район',
    link: cloudImage
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Иваново',
    link: skyImage
  }
];

export {initialCards}
