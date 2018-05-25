var catching = {
  selectorUsername: '#username',
  selectorPassword: '#password',
  selectorSubmit: '#button',
};

var status = {
  OK: 'OK',
  MISSING_DATE: 'Please fill in the form',
  WRONG_DATA: 'Wrong username and/or password.',
};

var inputUsername = document.querySelector(catching.selectorUsername);
var inputPassword = document.querySelector(catching.selectorPassword);
var errorElement = document.querySelector(UISelector.errorSelector);

function getFormDate() {
  var formDate = {};
  formDate.inputUsername.value;
  formDate.inputPassword.value;

  return formDate;
}
function validationDate(formDate) {
  if (formData.username == '' || formData.password == '') {
    return status.MISSING_DATE;
  }
}
function setError(message) {
  error.Element.textContent = message;
}
function clearError() {
  errorElement.textContent = '';
}
return {
  UISelector: UISelector,
  setError: setError,
  clearError: getFormData,
  getFormData: getFormData,
  validationDate: validationDate,
  status: status,
};
