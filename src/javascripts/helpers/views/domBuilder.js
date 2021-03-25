const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="main-container">
    <center><div id="header"></div></center>
    <div id="add-button"></div>
    <div id="form-modal"></div>
    <center><div id="form-container"></div></center>
    <div id="display-content"></div>
  </div>`;
};

export default domBuilder;
