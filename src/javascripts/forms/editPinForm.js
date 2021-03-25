import selectBoard from './selectBoard';

const editPinForm = (pinObject) => {
  document.querySelector('#form-modal').innerHTML = `
    <div class="container" id="update-form-container">
    <div class="card" id="create-board-card">
      <div class="card-body">
        <center><h3 class="card-title" style="margin-top: 1em; margin-bottom: 1em">Update Pin</h3></center>
        <div class="card border-white">
        <form id="edit-pin-form" class="mb-4">
        <div class="form-group">
          <label for="title">Pin Title</label>
          <input type="text" class="form-control" id="title" aria-describedby="pinTitle" placeholder="Enter Pin Title" value="${pinObject.pin_title}" required>
        </div>
        <div class="form-group">
          <label for="image">Image URL</label>
          <input type="url" class="form-control" id="image" placeholder="Image URL" required value="${pinObject.pin_image}">
        </div>
        <div class="form-group" id="select-board"></div>
        <button type="submit" id="update-pin-btn--${pinObject.firebaseKey}" class="btn btn-dark float-right">Update</button>
      </form>
      </div>
    </div>
    </div>
  </div>`;

  selectBoard(pinObject);
};

export default editPinForm;
