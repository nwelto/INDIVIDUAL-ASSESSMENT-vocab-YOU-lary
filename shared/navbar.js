import renderToDom from '../utils/renderToDom';

const navBar = () => {
  let domString = '';
  domString += `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
   <div class="container-fluid">
     <a class="navbar-brand" href="#">VocabYOU</a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="all-defs">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#" id="all-vocab">All</a>
       <li class="nav-item">
       <a class="nav-link active" aria-current="page" href="#" id="add-def-btn">Add Definition</a>
        </li>
       </ul>
       <form class="d-flex" role="search">
         <input class="form-control me-2" id="search" type="search" placeholder="Search Definitions" aria-label="Search">
       </form>
     </div>
   </div>
 </nav>`;
  renderToDom('#nav-bar', domString);
};

export default navBar;
