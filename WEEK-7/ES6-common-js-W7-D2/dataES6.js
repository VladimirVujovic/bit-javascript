export default class dataES6 {
  getData (inputData, printUsers) {
    const apiUrl = 'https://api.github.com/search/users?q=' + inputData;
    $.get (apiUrl).done (function (data) {
      printUsers (data);
      console.log (data);
    });
  }
}
