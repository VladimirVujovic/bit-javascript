import UIES6 from './UIES6.js';
import dataES6 from './dataES6.js';

$ (document).ready (function () {
  $ ('#button').on ('click', function () {
    const uiModule = new UIES6 ();
    const dataModule = new dataES6 ();

    const text = uiModule.inputData ();
    dataModule.getData (text, uiModule.printUsers);
  });

  $ ('#searchInput').on ('keydown', function (event) {
    if (event.keyCode === 13) {
      const uiModule = new UIES6 ();
      const dataModule = new dataES6 ();

      const text = uiModule.inputData ();
      dataModule.getData (text, uiModule.printUsers);
    }
  });
});
