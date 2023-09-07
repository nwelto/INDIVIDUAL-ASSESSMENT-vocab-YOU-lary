import { getDef } from '../api/vocabdata';
import domEvents from '../events/domEvents';
import { showDefs } from '../pages/vocab';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navbar';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  getDef(user.uid).then((title) => {
    showDefs(title);
  });
  domEvents(user.uid);
  formEvents(user);
  navEvents(user);
};
export default startApp;
