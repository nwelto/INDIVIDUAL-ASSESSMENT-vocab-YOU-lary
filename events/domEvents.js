import addDefForm from '../components/vocabForm';

const domEvents = () => {
  document.querySelector('#add-button').addEventListener('click', (e) => {
    if (e.target.id === 'add-def-btn') {
      addDefForm();
    }
  });
};
export default domEvents;
