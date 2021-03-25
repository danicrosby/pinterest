const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="header"></div>
    <div id="add-button"></div>
    <div id="form-modal"></div>
    <center><div id="form-container"></div></center>
    <div id="display-content"></div>
  </div>`;
};

export default domBuilder;
