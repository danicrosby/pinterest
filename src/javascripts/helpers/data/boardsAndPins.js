import { deleteBoard } from './boardData';
import { deletePin, getPinsOnBoard } from './pinData';

// DELETE BOARD AND ALL IT'S PINS
const deleteBoardPins = (firebaseKey) => new Promise((resolve, reject) => {
  getPinsOnBoard(firebaseKey).then((boardPinsArray) => {
    const deletePins = boardPinsArray.map((pin) => deletePins(pin.firebaseKey));

    Promise.all(deletePin).then(() => resolve(deleteBoard(firebaseKey)));
  }).catch((error) => reject(error));
});
export default deleteBoardPins;
