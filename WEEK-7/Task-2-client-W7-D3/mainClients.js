import {render} from './uiClients.js';
import {loadData} from './dataClients.js';

const init = () => {
  loadData ().then (myJSON => {
    render (myJSON);
  });
};
init ();
