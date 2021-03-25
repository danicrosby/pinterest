const boardPinInfo = (boardObject) => {
  document.querySelector('#header').innerHTML = '';
  document.querySelector('#header').innerHTML += `<h1 class="font-italic">${boardObject.board_title}</h1>`;
};

export default boardPinInfo;
