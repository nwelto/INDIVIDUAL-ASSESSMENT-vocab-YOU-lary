import renderToDom from '../utils/renderToDom';

const navBar = () => {
  let domString = '';
  domString += `<nav class="navbar navbar-expand-lg bg-body-tertiary">
   <div class="container-fluid">
     <a class="navbar-brand" href="#">VocabYOU</a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="all-defs">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#" id="all-vocab">All</a>
         </li>
         <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="#" id="language">Language</a>
       </li>
       </ul>
       <form class="d-flex" role="search">
         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
         <button class="btn btn-success" type="submit">Search</button>
       </form>
     </div>
   </div>
 </nav>`;
  renderToDom('#nav-bar', domString);
};

export default navBar;
