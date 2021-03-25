import selectBoard from './selectBoard';

const editPinForm = (pinObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-pin-form" class="mb-4">
      <div class="form-group">
        <label for="title">Pin Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="pinTitle" required value="${pinObject.pin_title}">
      </div>
      <div class="form-group">
        <label for="image">Image Url</label>
        <input type="url" class="form-control" id="image" required value="${pinObject.pin_image}">
      </div>
      <div class="form-group" id="select-board"></div>
      <button type="submit" id="update-pin--${pinObject.firebaseKey}" class="btn btn-dark float-right">Update Pin</button>
      
    </form>`;

  selectBoard(pinObject);
};

export default editPinForm;
