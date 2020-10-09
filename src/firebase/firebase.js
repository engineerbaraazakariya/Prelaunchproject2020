import * as firebase from "firebase";
// import firebase from 'firebase';
import config from "./config";

firebase.initializeApp(config);

const database = firebase.database();
const storage = firebase.storage();

export { firebase, database, storage };
