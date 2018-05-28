var ui = (function () {
  function display (response) {
    for (var i = 0; i < 50; i++) {
      var picture = response[i].image.medium;
      var idShow = response[i];
      var div =
        '<div><a href="./index2.html?id=' +
        idShow.id +
        '"><img class="img" src="' +
        picture +
        '"/></a></div>';
      $ ('h1').append (div);
    }
  }
  return {
    display: display,
  };
}) ();
