import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './apiKeys';
import home from '../views/home';
import startApp from '../views/startApp';
import loginButton from '../../components/buttons/loginButton';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user);
    } else {
      home();
      loginButton();
    }
  });
};

export default checkLoginStatus;
