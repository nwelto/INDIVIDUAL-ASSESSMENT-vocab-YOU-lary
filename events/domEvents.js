import addDefForm from '../components/vocabForm';
import { deleteDef, getDef, getSingleDef } from '../api/vocabdata';
import { emptyDef, showDefs } from '../pages/vocab';

const domEvents = (user) => {
  console.warn('user');
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteDef(firebaseKey).then(() => {
          getDef(user.uid).then((array) => {
            if (array.length) {
              showDefs(array);
            } else {
              emptyDef();
            }
          });
        });
      }
    }

    if (e.target.id.includes('update-def-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleDef(firebaseKey).then((genInfo) => addDefForm(user.uid, genInfo));
    }
  });
};

export default domEvents;
