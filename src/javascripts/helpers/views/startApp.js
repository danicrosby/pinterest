import { showBoards } from '../../components/boards';
import domBuilder from './domBuilder';
import logoutButton from '../../components/buttons/logoutButton';
import navBar from '../../components/navBar';
import pinDomEvents from '../../events/pinDomEvents';
import boardDomEvents from '../../events/boardDomEvents';
import navEvents from '../../events/navEvents';
import { getBoards } from '../data/boardData';

const startApp = (userObject) => {
  domBuilder();
  pinDomEvents(userObject);
  boardDomEvents(userObject);
  navBar();
  logoutButton();
  navEvents(userObject);
  getBoards(userObject).then((boards) => showBoards(boards));
};

export default startApp;
