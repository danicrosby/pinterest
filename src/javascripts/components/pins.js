const showPins = (array) => {
  document.querySelector('#header').innerHTML = `
    <div class="container-fluid mt-2 mx-auto mb-2" id="pins-display-content">
      <center><h2>Pins</h2></center>
    </div>`;

  document.querySelector('#add-button').innerHTML = '<button class="btn btn-light btn-lg m-2" style="font-size: 2em; width: 2em; height: 2em; border-radius: 50%" id="add-pin-btn">+</button>';
  document.querySelector('#display-content').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-content').innerHTML += `
      <div class="card mr-3 border-white" style="width: 14em; border-radius: 1em;">
        <img class="card-img-top" src=${item.pin_image} alt=${item.pin_title} style="width: 14em; border-radius: 1em">
        <div class="container pin-card-icons">
          <button class="btn btn-sm btn-secondary card-buttons" id="edit-pin-btn--${item.firebaseKey}"><img src="https://cdn2.iconfinder.com/data/icons/cosmo-multimedia/40/478017-pencil-512.png" style="width: 1em;"></button>
          <button class="btn btn-sm btn-danger card-buttons" id="delete-pin--${item.firebaseKey}">X</button>
        </div>
        <div class="card-body">
          <div class="card-title" style="font-size: 14px; margin-top: -10px; margin-left: -1em">${item.pin_title}</div>
        </div>
      </div>
    </div>`;
  });
};

export default showPins;
