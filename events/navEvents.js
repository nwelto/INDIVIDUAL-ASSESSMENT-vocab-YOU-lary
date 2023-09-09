import addDefForm from '../components/vocabForm';
import { searchDef, getDef } from '../api/vocabdata';
import { emptyDef, showDefs } from '../pages/vocab';
import clearForm from '../utils/clearForm';

const navEvents = (user) => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    if (e.target.id.includes('add-def-btn')) {
      addDefForm(user.uid);
    }
  });
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getDef(user.uid).then((array) => {
      if (array.length) {
        showDefs(array);
      } else {
        emptyDef();
      }
    });
    clearForm();
  });
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();

    if (e.keyCode === 13) {
      searchDef(searchValue, user.uid)
        .then((search) => {
          if (search.length) {
            showDefs(search);
          } else {
            emptyDef();
          }
        });
      document.querySelector('#search').value = '';
    }
  });
};

export default navEvents;
