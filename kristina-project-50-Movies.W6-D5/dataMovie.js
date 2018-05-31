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

//preko fetch-a, local storage

// export const loadData = () => {
//   let api = 'http://api.tvmaze.com/shows';
//   return fetch (api)
//     .then (response => {
//       return response.json ();
//     })
//     .then (response => {
//       localStorage.setItem ('shows', JSON.stringify (response));
//       return response;
//     });
// };
