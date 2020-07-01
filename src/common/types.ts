import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { RootState } from '../store/dto/rootState'

export type AppThunk = ThunkAction<any, RootState, null, Action<string>>
// Next Line:
// It is important to use Action as last type argument, does not work with any.
export type AppDispatch = ThunkDispatch<RootState, any, Action>

export const WORLD_STATE_LOADING = '@@map/WORLD_STATE_LOADING'
export const WORLD_STATE_NORMAL = '@@map/WORLD_STATE_NORMAL'
export const ON_WORLD_ENTER = '@@map/ON_WORLD_ENTER'
export const ON_WORLD_BUILD = '@@map/ON_WORLD_BUILD'
export const ON_WORLD_PLAYER = '@@map/ON_WORLD_PLAYER'
export const ON_WORLD_END = '@@map/ON_WORLD_END'
export const ON_WORLD_ERROR = '@@map/ON_WORLD_ERROR'
export const REQUEST_WORLD_DEFINITIONS = '@@fetching/REQUEST_WORLD_DEFINITIONS'
