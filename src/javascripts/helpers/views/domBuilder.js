const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="main-container"></div>
  <div id="header"></div>
  <div id="add-button"></div>
  <div id="overview"></div>
  <div id="form-container"></div>
  <div id="modal-container"></div>`;
};

export default domBuilder;
