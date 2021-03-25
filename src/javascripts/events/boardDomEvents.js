/* eslint-disable no-alert */
import boardPinInfo from '../components/boardInfo';
import showBoards from '../components/boards';
import showPins from '../components/pins';
import addBoardForm from '../forms/addBoardForm';
import { createBoard, deleteBoard, getSingleBoard } from '../helpers/data/boardData';
import { getPinsOnBoard } from '../helpers/data/pinData';

const boardDomEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // VIEW PINS ON BOARD
    if (e.target.id.includes('view-board-pins')) {
      const boardId = e.target.id.split('--')[1];
      getPinsOnBoard(boardId).then((pins) => showPins(pins));
      getSingleBoard(boardId).then((boards) => boardPinInfo(boards));
    }

    // DELETE BOARD
    if (e.target.id.includes('delete-board')) {
      if (window.confirm('Are you surer you want to delete this board?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteBoard(firebaseKey).then((boardsArray) => showPins(boardsArray));
      }
    }

    // ADD BOARD
    if (e.target.id.includes('add-board-btn')) {
      addBoardForm();
    }

    // SUBMIT BOARD
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        board_title: document.querySelector('#title').value,
        board_image: document.querySelector('#image').value,
      };

      createBoard(boardObject).then((boardsArray) => showBoards(boardsArray));
      document.querySelector('#form-container').innerHTML = '';
    }
  });
};

export default boardDomEvents;
