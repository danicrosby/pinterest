import selectBoard from './selectBoard';

const addPinForm = () => {
  document.querySelector('#overview').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';

  document.querySelector('#form-container').innerHTML = `
    <div class="container" id="create-board-container">
      <div class="card" id="create-board-card">
        <div class="card-body">
          <center><h3 class="card-title" style="margin-top: 1em; margin-bottom: 1em">Create Pin</h3></center>
          <div class="card border-white">
          <form id="submit-pin-form" class="mb-4">
            <div class="form-group">
            <label for="title"></label>
              <input type="text" class="form-control" id="title" placeholder="Pin Title" aria-describedby="pinTitle" required>
            </div>
            <div class="form-group">
              <label for="image"></label>
              <input type="url" class="form-control" placeholder="Image URL" id="image" required>
            </div>
            <div class="form-group" id="select-board"></div>
            
            <button type="submit" id="submit-pin" class="btn btn-dark float-right mt-1">Submit Pin</button>
          </form>
        </div>
      </div>
      </div>
    </div>
    `;

  selectBoard();
};

export default addPinForm;
