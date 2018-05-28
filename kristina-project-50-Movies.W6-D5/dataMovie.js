var dataMovie = (function () {
  var loadShow = function (handleData) {
    var request = 'http://api.tvmaze.com/shows';
    $.get (request).done (function (response) {
      console.log (response);
      handleData (response);
    });
  };

  return {
    loadShow: loadShow,
  };
}) ();
