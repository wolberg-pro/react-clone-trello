import { Reducer, combineReducers } from 'redux'
import { WorldState, initialWorldState } from '../dto/world'
import { ON_WORLD_ENTER } from '../../common/types'

// tslint:disable-next-line:no-unused-expression
const reducer: Reducer<WorldState> = (state = initialWorldState, action) => {
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
const neverReached = (never: any) => {}
export { reducer as WorldReducer }
