const showPins = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-light btn-sm mb-4" id="add-pin-btn">Add A Pin</button>';
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
      <div class="card m-3" style="width: 18rem;">
        <img class="card-img-top" src=${item.pin_image} alt=${item.pin_title}">
        <div class="card-body">
        <h5 class="card-title">${item.pin_title}</h5>
        <button class="btn btn-light" data-toggle="modal" data-target="#formModal" id="edit-pin-btn--${item.firebaseKey}">Edit Pin</button>
        <button class="btn btn-sm btn-dark" id="delete-pin--${item.firebaseKey}">Delete pin</button>
        </div>
      </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-light btn-sm mb-4" id="add-pin-btn">Add A Pin</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#store').innerHTML = '<h1>No Pins</h1>';
};

export { showPins, emptyPins };
