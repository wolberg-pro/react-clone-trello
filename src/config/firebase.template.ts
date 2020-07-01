export const firebaseConfig = {
  apiKey: '',
  authDomain: 'react-clone-trello.firebaseapp.com',
  databaseURL: 'https://react-clone-trello.firebaseio.com',
  projectId: 'react-clone-trello',
  storageBucket: 'react-clone-trello.appspot.com',
  messagingSenderId: '',
  appId: '',
  measurementId: 'G-W3MEQTL7X7'
}

export const reduxFirebase = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableLogging: true
}

export default { firebaseConfig, reduxFirebase }
