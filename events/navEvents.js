// import { getDef } from '../api/vocabdata';
import addDefForm from '../components/vocabForm';
// import { showDefs } from '../pages/vocab';
// import clearForm from '../utils/clearForm';

const navEvents = (user) => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    if (e.target.id.includes('add-def-btn')) {
      addDefForm(user.uid);
    }
  });
};
export default navEvents;
