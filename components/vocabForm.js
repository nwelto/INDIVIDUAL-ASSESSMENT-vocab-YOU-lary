import { getSingleDef } from '../api/vocabdata';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const addDefForm = (uid, termData = {}) => {
  clearDom();
  const domString = `
  <form id="${termData.firebaseKey ? `update-definition--${termData.firebaseKey}` : 'submit-definition'}" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="techType" placeholder="Enter Title" value="${termData.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="title">Tech/Language</label>
        <input type="text" class="form-control" id="techType" aria-describedby="techType" placeholder="Tech/Language" value="${termData.techType || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="description" style="height: 100px">${termData.description || ''}</textarea>
      </div>
      <button type="submit" class="btn btn-primary" id="submit-definition">Submit Definition
      </button>
  </form>`;
  renderToDom('#form-container', domString);
  getSingleDef(`${termData.firebaseKey || ''}`, uid);
};
export default addDefForm;
