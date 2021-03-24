const showBoards = (array) => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-light btn-sm mb-4" id="add-board-btn">Add A Board</button>';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
    <div class="card m-3" style="width: 18rem;">
    <img class="card-img-top" src=${item.board_image} alt=${item.board_title}">
      <div class="card-body">
        <a href="#"><h5 id="board-name-title--${item.firebaseKey}" class="card-title">${item.board_title}</h5></a>
        <button class="btn btn-sm btn-danger" id="delete-board--${item.firebaseKey}">Delete Board</button>
      </div>
    </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#store').innerHTML = '<h1>No Boards</h1>';
};

export { showBoards, emptyBoards };
