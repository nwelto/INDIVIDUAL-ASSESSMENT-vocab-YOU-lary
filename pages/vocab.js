import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyDef = () => {
  const domString = '<h1>No Definitions</h1>';
  renderToDom('#vocab-container', domString);
};

const showDefs = (array) => {
  clearDom();

  const btnString = '<button type="button" class="btn btn-primary" id="add-def-btn">Add A Definition</button>';
  renderToDom('#add-button', btnString);

  let domString = '';
  if (array.length < 1) {
    emptyDef();
  } else {
    array.forEach((gen) => {
      domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${gen.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${gen.techType}</h6>
          <p class="card-text">${gen.definition}</p>
          <button type="button" class="btn btn-info" id="update-def">Update</button>
          <button type="button" class="btn btn-danger" id="delete-def">Delete</button>
        </div>
      </div>`;
    });
  }
  renderToDom('#vocab-container', domString);
};
export { emptyDef, showDefs };
