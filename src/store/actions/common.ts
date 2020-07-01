import {
  AppThunk,
  WORLD_STATE_LOADING,
  WORLD_STATE_NORMAL
} from '../../common/types'

// tslint:disable-next-line: no-unused-expression
export const triggerWorldBuildingState = (state: boolean): AppThunk => {
  return async dispatch => {
    return {
      type: state ? WORLD_STATE_LOADING : WORLD_STATE_NORMAL
    }
  }
}
