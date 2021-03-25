import boardPinInfo from '../components/boardPinInfo';
import { showBoards } from '../components/boards';
import { showPins } from '../components/pins';
import addBoardForm from '../forms/addBoardForm';
import { createBoard, deleteBoard } from '../helpers/data/boardData';

// CLICK EVENTS

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // EVENT TO SHOW FORM TO ADD BOARD
    if (e.target.id.includes('add-board-btn')) {
      addBoardForm();
    }

    // SUMBIT FORM FOR ADDING BOARD
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        board_title: document.querySelector('#title').value,
        board_image: document.querySelector('#image').value,
      };
      createBoard(boardObject).then((boardArray) => showBoards(boardArray));
    }

    // DELETE BOARD
    if (e.target.id.includes('delete-board')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('delete board request line 72')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteBoard(firebaseKey).then((boardsArray) => showBoards(boardsArray));
      }
    }

    // SEE PINS ON BOARDS
    if (e.target.id.includes('board-name-title')) {
      const boardId = e.target.id.split('--')[1];
      boardPinInfo(boardId).then((boardInfoObject) => {
        showPins(boardInfoObject.pins);
        boardPinInfo(boardInfoObject.board);
      });
    }
  });
};

export default domEvents;
