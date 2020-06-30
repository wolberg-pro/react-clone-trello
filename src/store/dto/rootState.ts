import { FirebaseReducer, FirestoreReducer } from 'react-redux-firebase'
import { UserProfile } from './todo'
import { WorldState } from './world'

export interface RootState {
  firebase: FirebaseReducer.Reducer<UserProfile>
  firestore: FirestoreReducer.Reducer
  world: WorldState
}
