import { combineReducers } from 'redux'
import { firebaseReducer, firestoreReducer } from 'react-redux-firebase'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { RootState } from '../dto/rootState'
import { WorldReducer } from './world'

const persistConfig = {
  key: 'profolio_site',
  storage
}

const rootReducer = combineReducers<RootState>({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  world: WorldReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export type AppState = ReturnType<typeof persistedReducer>

export default persistedReducer
