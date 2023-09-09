import { createDef, getDef, updateDef } from '../api/vocabdata';
import { showDefs } from '../pages/vocab';
import clearForm from '../utils/clearForm';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-definition')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#description').value,
        techType: document.querySelector('#techType').value,
        uid: user.uid
      };
      clearForm();

      createDef(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateDef(patchPayload).then(() => {
          getDef(user.uid).then(showDefs);
          clearForm();
        });
      });
    }
    if (e.target.id.includes('update-definition')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#description').value,
        techType: document.querySelector('#techType').value,
        uid: user.uid,
        firebaseKey
      };

      updateDef(payload).then(() => {
        getDef(user.uid).then(showDefs);
        clearForm();
      });
    }
  });
};
export default formEvents;
