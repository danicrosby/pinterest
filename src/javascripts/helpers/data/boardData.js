import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET BOARD
const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// CREATE BOARD
const createBoard = (boardObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/boards.json`, boardObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/boards/${response.data.name}.json`, body)
        .then(() => {
          getBoards().then((boardsArray) => resolve(boardsArray));
        });
    }).catch((error) => reject(error));
});

// DELETE BOARD
const deleteBoard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoards().then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
});

// GET SINGLE BOARD
const getSingleBoard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// UPDATE BOARD
const updateBoard = (firebaseKey, boardObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/boards/${firebaseKey}.json`, boardObject)
    .then(() => getBoards()).then((boardsArray) => resolve(boardsArray))
    .catch((error) => reject(error));
});

export {
  getBoards, createBoard, deleteBoard, getSingleBoard, updateBoard
};
