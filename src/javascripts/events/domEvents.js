
/* eslint-disable no-alert */
import addPinForm from '../components/forms/addPinForm';
import { showPins } from '../components/pins';
import { showBoards } from '../components/boards';
import addBoardForm from '../components/forms/addBoardForm';
import { createBoard, deleteBoard } from '../helpers/data/boardData';
import { createPin, deletePin, getSinglePin } from '../helpers/data/pinData';
import editPinForm from '../components/forms/editPinForm';
import formModal from '../components/forms/formModal';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
  // DELETE PIN
    if (e.target.id.includes('delete-pin')) {
      if (window.confirm('Are you surer you want to delete this pin?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deletePin(firebaseKey, uid).then((pinsArray) => showPins(pinsArray));
      }
    }

    // SHOW ADD PIN FORM
    if (e.target.id.includes('add-pin-btn')) {
      e.preventDefault();
      addPinForm();
    }

    // SUBMIT PIN FORM
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        pin_title: document.querySelector('#title').value,
        pin_image: document.querySelector('#image').value,
        board_id: document.querySelector('#select-board').value,
        uid
      };

      createPin(pinObject, uid).then((pinsArray) => showPins(pinsArray));
    }

    // EDIT PIN FORM // this is a comment so i can push
    if (e.target.id.includes('edit-pin-btn')) {
      console.warn('CLICKED SUBMIT PIN', e.target.id);
    }

    // SUBMIT UPDATE FOR PIN
    if (e.target.id.includes('update-pin-btn')) {
      console.warn('CLICKED SUBMIT PIN', e.target.id);
    }

    // DELETE BOARD
    if (e.target.id.includes('delete-board')) {
      if (window.confirm('Are you surer you want to delete this board?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteBoard(firebaseKey, uid).then((boardsArray) => showPins(boardsArray));
      }
    }

    // SHOW ADD BOARD FORM
    if (e.target.id.includes('add-board-btn')) {
      addBoardForm();
    }

    // SUBMIT BOARD FORM
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        board_title: document.querySelector('#title').value,
        board_image: document.querySelector('#image').value,
        uid
      };

      createBoard(boardObject, uid).then((boardsArray) => showBoards(boardsArray));
    }

    // SHOW MODAL FOR ADD BOARD
    if (e.target.id.includes('edit-board-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Update Board');
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
    }

    // SUBMIT UPDATE FOR BOARD
    if (e.target.id.includes('update-board-btn')) {
      console.warn('CLICKED UPDATE BOARD', e.target.id);
    }
  });
};

export default domEvents;
