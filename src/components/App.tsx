import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore' // make sure you add this for firestore
import React from 'react'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import {
  firebaseConfig as fbConfig,
  reduxFirebase as rfConfig
} from '../config/firebase'
import Home from './home/Home'
import configureStore from '../store'

// Initialize Firebase instance
firebase.initializeApp(fbConfig)
firebase.firestore()
const store = configureStore()
export default () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={rfConfig}
      dispatch={store.dispatch}>
      <Home />
    </ReactReduxFirebaseProvider>
  </Provider>
)
