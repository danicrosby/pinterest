import domBuilder from './domBuilder';

const home = () => {
  domBuilder();
  const domString = `
    <nav class="navbar fixed-top navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Pinterest</a>
      <div id="login-button"></div>
    </nav>`;
  document.querySelector('#navigation').innerHTML = domString;
};

export default home;
