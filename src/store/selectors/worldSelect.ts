import { createSelector } from 'reselect'
import { RootState } from '../dto/rootState'

const worldSelectorFromState = (state: RootState) => state.world
export { worldSelectorFromState }
