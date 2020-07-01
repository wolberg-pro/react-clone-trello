import { AxiosResponse } from 'axios'
import {
  ON_WORLD_ENTER,
  ON_WORLD_BUILD,
  ON_WORLD_PLAYER,
  ON_WORLD_END,
  AppThunk,
  ON_WORLD_ERROR
} from '../../common/types'
import { triggerWorldBuildingState } from './common'
import { WorldState } from '../dto/world'
import { WorldApi } from '../api/worldApi'

export interface WorldDispatchToPropTypes {
  startBuildWorld: () => void
}
// tslint:disable-next-line: no-unused-expression
export const startLoadWorld = (): AppThunk => {
  return async dispatch => {
    dispatch(triggerWorldBuildingState(true))
    try {
      const response: AxiosResponse<WorldState> = await WorldApi.getWorldDefinitions()
      dispatch(buildWorld(response))
      return {
        type: ON_WORLD_ENTER,
        payload: response
      }
    } catch (e) {
      // tslint:disable-next-line: no-console
      // eslint-disable-next-line no-console
      console.log('ERROR in world building: failed in fetch definitions', e)
      return {
        type: ON_WORLD_ERROR
      }
    }
  }
}
// tslint:disable-next-line: no-unused-expression
export const buildWorld = (response: AxiosResponse<WorldState>): AppThunk => {
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

export type worldActions =
  | typeof endWorldBuilding
  | typeof buildWorld
  | typeof startLoadWorld
