import { getBoards } from '../helpers/data/boardData';

const selectBoard = (pinObject = {}) => {
  let domString = `<label for="board">Select a Board</label>
    <select class="form-control" id="board" required>
    <option value="">Select a Board</option>`;

  getBoards().then((boardsArray) => {
    boardsArray.forEach((board) => {
      if (board.firebaseKey === pinObject.board_id) {
        domString += `<option selected value="${board.firebaseKey}">${board.board_title}</option>`;
      } else {
        domString += `<option value="${board.firebaseKey}">${board.board_title}</option>`;
      }
    });

    domString += '</select>';

    document.querySelector('#select-board').innerHTML = domString;
  });
};

export default selectBoard;
