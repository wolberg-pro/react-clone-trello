import { FirebaseReducer, FirestoreReducer } from 'react-redux-firebase'
import { UserProfile } from './todo'
import { WorldState } from './world'

export interface RootStateData {
  world: WorldState
  loading: boolean
}
export interface RootState {
  firebase: FirebaseReducer.Reducer<UserProfile>
  firestore: FirestoreReducer.Reducer
  world: WorldState
}
