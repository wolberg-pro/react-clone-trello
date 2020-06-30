import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { RootState } from '../store/dto/rootState'

export type AppThunk = ThunkAction<any, RootState, null, Action<string>>
// Next Line:
// It is important to use Action as last type argument, does not work with any.
export type AppDispatch = ThunkDispatch<RootState, any, Action>

export const WORLD_STATE_LOADING = 'WORLD_STATE_LOADING'
export const WORLD_STATE_NORMAL = 'WORLD_STATE_NORMAL'
export const ON_WORLD_ENTER = 'ON_WORLD_ENTER'
export const ON_WORLD_BUILD = 'ON_WORLD_BUILD'
export const ON_WORLD_PLAYER = 'ON_WORLD_PLAYER'
export const ON_WORLD_END = 'ON_WORLD_END'
export const ON_WORLD_ERROR = 'ON_WORLD_ERROR'
export const REQUEST_WORLD_DEFINITIONS = 'REQUEST_WORLD_DEFINITIONS'
