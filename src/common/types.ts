import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { RootState } from '../store/dto/rootState'

export const ON_WORLD_ENTER = 'ON_WORLD_ENTER'
export const ON_WORLD_BUILD = 'ON_WORLD_BUILD'
export const ON_WORLD_PLAYER = 'ON_WORLD_PLAYER'
export const ON_WORLD_END = 'ON_WORLD_END'

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
// Next Line:
// It is important to use Action as last type argument, does not work with any.
export type AppDispatch = ThunkDispatch<RootState, any, Action>
