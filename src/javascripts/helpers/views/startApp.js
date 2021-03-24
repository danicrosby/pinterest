import { showBoards } from '../components/boards';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from './domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import { getBoards } from '../helpers/data/boardData';

const startApp = (userObject) => {
  domBuilder();
  domEvents(userObject.uid);
  navBar();
  logoutButton();
  navEvents(userObject.uid);
  getBoards(userObject.uid).then((boards) => showBoards(boards));
};

export default startApp;
