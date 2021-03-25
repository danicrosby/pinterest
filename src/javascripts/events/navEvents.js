import showPins from '../components/pins';
import showBoards from '../components/boards';
import { getPins } from '../helpers/data/pinData';
import { getBoards } from '../helpers/data/boardData';

const navEvents = () => {
  // GET ALL PINS
  document.querySelector('#all-pins-dropdown').addEventListener('click', () => {
    getPins().then((pinsArray) => showPins(pinsArray));
    document.querySelector('#form-container').innerHTML = '';
  });

  // GET BOARDS
  document.querySelector('#all-boards-dropdown').addEventListener('click', () => {
    getBoards().then((boardArray) => showBoards(boardArray));
    document.querySelector('#form-container').innerHTML = '';
  });
};
export default navEvents;
