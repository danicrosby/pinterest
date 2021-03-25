/* eslint-disable object-curly-newline */
/* eslint-disable no-alert */
import { showBoards } from '../../components/boards';
import { showPins } from '../../components/pins';
import addBoardForm from '../../forms/addBoardForm';
import boardPinInfo from '../../components/boardPinInfo';
import { createBoard, deleteBoard, getSingleBoard, updateBoard } from '../data/boardData';
import { getPins } from '../data/pinData';
import editBoardForm from '../../forms/editBoardForm';
import formModal from '../../forms/formModal';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // ADD BOARD FORM
    if (e.target.id.includes('add-board-btn')) {
      addBoardForm();
    }

    // SUBMIT BOARD FORM
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        board_title: document.querySelector('#title').value,
        board_image: document.querySelector('#image').value,
      };

      createBoard(boardObject).then((boardArray) => showBoards(boardArray));
      document.querySelector('#form-container').innerHTML = '';
    }

    // DELETE BOARD
    if (e.target.id.includes('delete-board')) {
      if (window.confirm('Are you sure you want to delete this board?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteBoard(firebaseKey).then((boardsArray) => showBoards(boardsArray));
      }
    }
    // SEE PINS ON BOARDS
    if (e.target.id.includes('see-pins-for-this-board')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
      getPins(firebaseKey).then((pins) => showPins(pins));
      getSingleBoard(firebaseKey).then((board) => boardPinInfo(board));
    }

    // EDIT BOARD MODAL
    if (e.target.id.includes('edit-board-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Update Board');
      getSingleBoard(firebaseKey).then((boardObject) => editBoardForm(boardObject));
    }

    // UPDATE BOARD
    if (e.target.id.includes('update-board')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const boardObject = {
        board_title: document.querySelector('#title').value,
        board_image: document.querySelector('#image').value,
      };

      updateBoard(firebaseKey, boardObject).then((boardsArray) => showBoards(boardsArray));

      $('#formModal').modal('toggle');
    }
  });
};

export default domEvents;
