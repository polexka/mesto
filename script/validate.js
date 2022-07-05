function showError(FormElement, inputElement, errorMessage, config) {
  const errorElement = FormElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
}

function hideError(FormElement, inputElement, config) {
  const errorElement = FormElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(config.errorClass);
}

function checkInputValidity(formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideError(formElement, inputElement, config);
  }
}

function setEventListeners(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButton(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButton(inputList, buttonElement, config);
    });
  });
}

function enableValidation(config) {
  const FormList = Array.from(document.querySelectorAll(config.formSelector));
  FormList.forEach((formElement) => {
    setEventListeners(formElement, config)
  });
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButton(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.disabledButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.disabledButtonClass);
    buttonElement.disabled = false;
  }
}

function cleanInput(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  inputList.forEach((inputElement) => {
    hideError(formElement, inputElement, config);
  })
}

function enableButton(buttonElement, disabledButtonClass) {
  buttonElement.classList.remove(disabledButtonClass);
  buttonElement.disabled = false;
}

function disableButton(buttonElement, disabledButtonClass) {
  buttonElement.classList.add(disabledButtonClass);
  buttonElement.disabled = true;
}
