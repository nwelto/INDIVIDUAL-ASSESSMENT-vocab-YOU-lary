import { createDef, getDef, updateDef } from '../api/vocabdata';
import { showDefs } from '../pages/vocab';

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

      createDef(payload).then(({ def }) => {
        const patchPayload = { firebaseKey: def };

        updateDef(patchPayload).then(() => {
          getDef(user.uid).then(showDefs);
        });
      });
    }
  });
};
export default formEvents;
