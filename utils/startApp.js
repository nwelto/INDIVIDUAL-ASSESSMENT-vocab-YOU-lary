import { getDef } from '../api/vocabdata';
import domEvents from '../events/domEvents';
import { emptyDef, showDefs } from '../pages/vocab';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navbar';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import logoutButton from '../components/logoutButton';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  domEvents(user.uid);
  formEvents(user);
  navEvents(user);
  logoutButton();

  getDef(user.uid).then((array) => {
    if (array.length) {
      showDefs(array);
    } else {
      emptyDef();
    }
  });
};

export default startApp;
