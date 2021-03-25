/* eslint-disable no-alert */
import boardPinInfo from '../../components/boardPinInfo';
import { showBoards } from '../../components/boards';
import { showPins } from '../../components/pins';
import addBoardForm from '../../forms/addBoardForm';
import { createBoard, deleteBoard } from '../data/boardData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // ADD BOARD FORM
    if (e.target.id.includes('add-board-btn')) {
      addBoardForm();
      document.querySelector('#form-container').innerHTML = '';
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
      const boardId = e.target.id.split('--')[1];
      boardPinInfo(boardId).then((boardInfoObject) => {
        showPins(boardInfoObject.pins);
        boardPinInfo(boardInfoObject.board);
      });
    }
  });
};

export default domEvents;
