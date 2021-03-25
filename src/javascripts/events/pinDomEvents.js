/* eslint-disable no-alert */
import showPins from '../components/pins';
import addPinForm from '../forms/addPinForm';
import editPinForm from '../forms/editPinForm';
import {
  createPin,
  deletePin,
  getSinglePin,
  updatePin
} from '../helpers/data/pinData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
  // DELETE PIN
    if (e.target.id.includes('delete-pin')) {
      if (window.confirm('Are you surer you want to delete this pin?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deletePin(firebaseKey).then((pinsArray) => showPins(pinsArray));
      }
    }

    // ADD PIN FORM
    if (e.target.id.includes('add-pin-btn')) {
      e.preventDefault();
      addPinForm();
    }

    // SUBMIT PIN
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        pin_title: document.querySelector('#title').value,
        pin_image: document.querySelector('#image').value,
        board_id: document.querySelector('#select-board').value,
      };

      createPin(pinObject).then((pinsArray) => showPins(pinsArray));
      document.querySelector('#form-container').innerHTML = '';
    }

    // EDIT PIN
    if (e.target.id.includes('edit-pin-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
    }

    // UPDATE PIN
    if (e.target.id.includes('update-pin-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const pinObject = {
        pin_title: document.querySelector('#title').value,
        imageUrl: document.querySelector('#image').value,
        board_id: document.querySelector('#select-board').value
      };

      updatePin(firebaseKey, pinObject).then((pinsArray) => showPins(pinsArray));
      document.querySelector('#form-container').innerHTML = '';
    }
  });
};

export default domEvents;
