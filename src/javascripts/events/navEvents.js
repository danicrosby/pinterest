import { showPins, emptyPins } from '../components/pins';
import { showBoards, emptyBoards } from '../components/boards';
import signOut from '../helpers/auth/signOut';
import { getPins } from '../helpers/data/pinData';
import { getBoards } from '../helpers/data/boardData';

const navEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // GET ALL PINS
  document.querySelector('#all-pins').addEventListener('click', () => {
    getPins(uid).then((pinsArray) => {
      if (pinsArray.length) {
        showPins(pinsArray);
      } else {
        emptyPins();
      }
    });
  });

  // GET BOARDS
  document.querySelector('#boards').addEventListener('click', () => {
    getBoards(uid).then((boardArray) => {
      if (boardArray.length) {
        showBoards(boardArray);
      } else {
        emptyBoards();
      }
    });
  });

  // END NAV SECTION
};
export default navEvents;
