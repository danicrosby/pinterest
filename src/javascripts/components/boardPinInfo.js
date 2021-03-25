const boardInfo = (boardObject) => {
  document.querySelector('#add-button').innerHTML += `
  <h1${boardObject.board_title}'s Pins</h1>`;
};

export default boardInfo;
