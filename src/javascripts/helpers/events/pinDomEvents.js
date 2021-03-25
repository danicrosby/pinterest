/* eslint-disable no-alert */
/* eslint-disable object-curly-newline */
import { showPins } from '../../components/pins';
import addPinForm from '../../forms/addPinForm';
import editPinForm from '../../forms/editPinForm';
import formModal from '../../forms/formModal';
import { createPin, deletePin, getSinglePin, updatePin } from '../data/pinData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // DELETE PIN
    if (e.target.id.includes('delete-pin')) {
      if (window.confirm('delete pin request line 24')) {
        const firebaseKey = e.target.id.split('--')[1];
        deletePin(firebaseKey).then((pinsArray) => showPins(pinsArray));
      }
    }

    // ADD PIN
    if (e.target.id.includes('add-pin-btn')) {
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
    }

    // EDIT PIN MODAL
    if (e.target.id.includes('edit-pin-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Update Pin');
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
    }

    // UPDATE PIN
    if (e.target.id.includes('update-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const pinObject = {
        pin_title: document.querySelector('#title').value,
        pin_image: document.querySelector('#image').value,
        board_id: document.querySelector('#select-board').value,
      };

      updatePin(firebaseKey, pinObject).then((pinsArray) => showPins(pinsArray));

      $('#formModal').modal('toggle');
    }
  });
};

export default domEvents;
