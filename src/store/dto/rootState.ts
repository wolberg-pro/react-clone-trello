import { FirebaseReducer, FirestoreReducer } from 'react-redux-firebase';
import { UserProfile } from './todo';

export interface RootState {
  firebase: FirebaseReducer.Reducer<UserProfile>
  firestore: FirestoreReducer.Reducer
}
