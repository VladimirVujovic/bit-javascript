// class DataModule {
//   getData (handleData) {
//     let request = 'http://127.0.0.1:3000';
//     fetch (request)
//       .then (function (response) {
//         console.log (response);
//         return response.JSON ();
//       })
//       .then (function (myJson) {
//         return myJson;
//       });
//   }
// }
// module.exports = DataModule;
// data = new DataModule ();

export const loadData = () => {
  let api = 'http://127.0.0.1:3000';
  return fetch (api).then (response => {
    return response.json ();
  });
};
