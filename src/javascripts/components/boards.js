const showBoards = (array) => {
  document.querySelector('#header').innerHTML = `
  <div class="container-fluid mt-2 mx-auto" id="boards-display-content">
    <center><h2>Boards</h2></center>
  </div>`;

  document.querySelector('#add-button').innerHTML = '<button class="btn btn-light btn-sm m-2" style="font-size: 2em; width: 2em; height: 2em; border-radius: 50%" id="add-board-btn"> + </button>';
  document.querySelector('#display-content').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-content').innerHTML += `
    <div class="card mr-3 border-white" style="width: 16em; height: 10em; border-radius: 1em;">
    <img class="card-img-top" src=${item.board_image} alt=${item.board_title} style="border-radius: 1em">
    <div class="card-body">
     <div class="container board-card-icons">
     <button class="btn btn-sm btn-danger card-buttons" id="delete-board--${item.firebaseKey}">X</button>     </div>
      <a href="#"><h4 id="view-board-pins--${item.firebaseKey}" class="card-title" style="font-weight: bold; margin-top: -10px; margin-left: -1em">${item.board_title}</h4></a>
    </div>
  </div>`;
  });
};

export default showBoards;
