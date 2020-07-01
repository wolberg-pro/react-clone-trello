import { Reducer } from 'react'
import { worldActions } from '../actions/world'
import { WorldState, initialWorldState } from '../dto/world'

// tslint:disable-next-line:no-unused-expression
const worldReducer: Reducer<WorldState, worldActions> = (
  state = initialWorldState,
  action
) => {
  switch (action.type) {
    case ON_WORLD_ENTER: {
      return {
        ...state,
        loading: true
      }
    }
    default:
      neverReached(action) // when a new action is created, this helps us remember to handle it in the reducer
  }
  return state
}

// tslint:disable-next-line:no-empty
const neverReached = (never: never) => {}
