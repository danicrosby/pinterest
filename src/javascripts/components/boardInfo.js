const boardPinInfo = (boardObject) => {
  document.querySelector('#header').innerHTML = '';
  document.querySelector('#header').innerHTML += `<h2>${boardObject.board_title}'s Pins</h2>`;
};

export default boardPinInfo;
