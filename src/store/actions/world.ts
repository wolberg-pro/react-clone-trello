import {
  ON_WORLD_ENTER,
  ON_WORLD_BUILD,
  ON_WORLD_PLAYER,
  ON_WORLD_END,
  AppThunk
} from '../../common/types'
// tslint:disable-next-line: no-unused-expression
export const startLoadWorld = (): AppThunk => {
  return async dispatch => {
    return {
      type: ON_WORLD_ENTER
    }
  }
}
// tslint:disable-next-line: no-unused-expression
export const buildWorld = (): AppThunk => {
  return async dispatch => {
    return {
      type: ON_WORLD_BUILD
    }
  }
}
// tslint:disable-next-line: no-unused-expression
export const loadPlayer = (): AppThunk => {
  return async dispatch => {
    return {
      type: ON_WORLD_PLAYER
    }
  }
}
// tslint:disable-next-line: no-unused-expression
export const endWorldBuilding = (): AppThunk => {
  return async dispatch => {
    return {
      type: ON_WORLD_END
    }
  }
}
