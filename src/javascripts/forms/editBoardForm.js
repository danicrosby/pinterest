const editBoardForm = (boardObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-board-form" class="mb-4">
      <div class="form-group">
        <label for="title">BoardTitle</label>
        <input type="text" class="form-control" id="title" aria-describedby="boardTitle" required value="${boardObject.board_title}">
      </div>
      <div class="form-group">
        <label for="image">Image Url</label>
        <input type="url" class="form-control" id="image" required value="${boardObject.board_image}">
      </div>
      <div class="form-group" id="select-board"></div>
      <button type="submit" id="update-board--${boardObject.firebaseKey}" class="btn btn-dark float-right">Update</button>
      
    </form>`;
};

export default editBoardForm;
