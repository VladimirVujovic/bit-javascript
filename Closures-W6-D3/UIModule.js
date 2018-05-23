// ako promenimo html i izbrisu nam se svi id-ovi minjamo ih iz js-a

var UISelector = function() {
  usernameSelector: '#username';
  passwordSelector: '#password';
  errorSelector: '#error';
  loginButtonSelector: 'login-button';
};

var status = {
  OK: 'OK',
  MISSING_DATE: 'Please fill in the form',
  WRONG_DATA: 'Wrong username and/or password.',
};

var usernameInput = document.querySelector(UISelector.usernameSelector);
var passwordInput = document.querySelector(UISelector.passwordSelector);
var errorElement = document.querySelector(UISelector.errorSelector);

function getFormDate() {
  var formData = {};
  formDate.name = usernameInput.value;
  formData.password = passwordInput.value;

  return formDate;
}
function validationDate(formData) {
  if (formData.username == '' || formData.password == '') {
    // return "Please fill in the form"
    return status.MISSING_DATE;
  }
}
function setError(message) {
  errorElement.textContent = message;
}

function clearError() {
  errorElement.textContent = '';
}
return {
  UISelector: UISelector,
  setError: setError,
  clearError: clearError,
  getFormData: getFormData,
  validationData: validationD,
  status: status,
};
