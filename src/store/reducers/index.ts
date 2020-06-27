import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { RootState } from '../dto/todo'

const rootReducer = combineReducers<RootState>({
  firebase: firebaseReducer,
  // firestore: firestoreReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
