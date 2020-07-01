import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore' // make sure you add this for firestore
import React from 'react'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import {
  firebaseConfig as fbConfig,
  reduxFirebase as rfConfig
} from '../config/firebase'
import configureStore from '../store'
import Home from './home/Home'

// Initialize Firebase instance
firebase.initializeApp(fbConfig)
firebase.firestore()
const store = configureStore()
const persistor = persistStore(store)
export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} />
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={rfConfig}
      dispatch={store.dispatch}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>
)
