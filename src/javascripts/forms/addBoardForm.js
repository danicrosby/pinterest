const addBoardForm = () => {
  document.querySelector('#display-content').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';

  document.querySelector('#form-container').innerHTML = `
  <div class="container" id="create-board-container">
  <div class="card" id="create-board-card">
    <div class="card-body">
      <center><h3 class="card-title" style="margin-top: 1em; margin-bottom: 1em">Create Board</h3></center>
      <div class="card border-white">
        <form id="submit-board-form" class="mb-4">
    
          <div class="form-group">
            <label for="title">Name</label>
            <input type="text" class="form-control" id="title" aria-describedby="boardTitle" required>
          </div>
    
          <div class="form-group">
            <label for="image">Image Url</label>
            <input type="url" class="form-control" id="image" required>
          </div>
    
          <button type="submit" id="submit-board" class="btn btn-dark float-right" style="margin-top: 1em;">Create</button>
        </form>
      </div>
    </div>
  </div>
</div>`;
};

export default addBoardForm;
