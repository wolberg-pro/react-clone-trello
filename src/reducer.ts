import { combineReducers, Reducer } from 'redux'
import {
  firebaseReducer,
  FirebaseReducer,
  FirestoreReducer,
  firestoreReducer
} from 'react-redux-firebase'

interface UserProfile {
  email: string
}

export interface TodoValue {
  text: string
  done: boolean
}

// create schema for the DB
interface DBSchema {
  todos: TodoValue
  [name: string]: any
}
interface RootState {
  firebase: FirebaseReducer.Reducer<UserProfile>
  firestore: FirestoreReducer.Reducer
}

const rootReducer = combineReducers<RootState>({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
