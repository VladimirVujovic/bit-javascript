export default class UIES6 {
  inputData () {
    const searchData = $ ('#searchInput').val ();
    return searchData;
  }

  printUsers (data) {
    for (let i = 0; i < 10; i++) {
      let name = '';
      let url = '';

      name = data.items[i].login;
      url = data.items[i].avatar_url;

      let userInfo = '<div>';
      userInfo += '<p>' + name + '</p>';
      userInfo += '<img src="' + url + '">';
      userInfo += '</div';

      document.getElementById ('gallery').innerHTML += userInfo;
    }
  }
}
