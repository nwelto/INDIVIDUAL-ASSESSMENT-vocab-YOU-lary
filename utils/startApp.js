import { getDef } from '../api/vocabdata';
import domEvents from '../events/domEvents';
import { showDefs } from '../pages/vocab';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navbar';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  getDef(user.uid).then((title) => {
    showDefs(title);
  });
  domEvents();
  formEvents(user);
};
export default startApp;
