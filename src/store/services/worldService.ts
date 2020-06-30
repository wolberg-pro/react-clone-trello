/* eslint-disable no-param-reassign */
import { Subject, Observable, of } from 'rxjs'
import { mergeMap } from 'rxjs/operators'
import i18next from 'i18next'

import {
  WorldStatus,
  WorldState,
  WorldLocations,
  WorldLocation
} from '../dto/world'
import { AppDispatch } from '../../common/types'

export class WorldService {
  private static instance: WorldService

  private translate: any

  private subject$: Subject<WorldState> = new Subject<WorldState>()

  private dispatch: AppDispatch = null

  private worldState!: WorldState

  private constructor() {}

  static getInstance(): WorldService {
    if (!WorldService.instance) {
      WorldService.instance = new WorldService()
    }

    return WorldService.instance
  }

  public initWorld(dispatch: AppDispatch): void {
    this.dispatch = dispatch
    this.subject$.complete()
    this.subject$.pipe(
      mergeMap((worldState: WorldState) => this.loadWorldStage(worldState))
    )
  }

  private loadWorldStage(worldState: WorldState): Observable<WorldState> {
    this.worldState = worldState
    if (this.worldState) {
      switch (worldState.status) {
        case WorldStatus.Start:
          return this.initWorldBuild()
        case WorldStatus.Building:
          return this.handleWorldBuild()
        case WorldStatus.LoadingPlayer:
          return this.handlePlayer()
        case WorldStatus.Done:
          return this.finalizedWorld()
      }
    }
    return this.onErrorWorldBuild()
  }

  private onErrorWorldBuild(): Observable<WorldState> {
    this.worldState.status = WorldStatus.Error
    this.worldState.errorMessage = this.translate.t('ERR_Map_Loading')
    return of(this.worldState)
  }

  private initWorldBuild(): Observable<WorldState> {
    return of(this.worldState)
  }

  private handleWorldBuild(): Observable<WorldState> {
    return of(this.worldState)
  }

  private handlePlayer(): Observable<WorldState> {
    return of(this.worldState)
  }

  private finalizedWorld(): Observable<WorldState> {
    return of(this.worldState)
  }

  public get getWorld(): Observable<WorldState> {
    return this.subject$.asObservable()
  }

  public renderMap(translate: any): void {
    this.translate = translate
    this.subject$.next({
      locations: [],
      definitions: {
        entities: [],
        entitiesBlockMovement: [],
        title: '',
        shortInfo: '',
        borderEdge: true,
        treeFactor: 0,
        rockFactor: 0,
        roundWater: false,
        sizeH: 0,
        sizeW: 0
      },
      status: WorldStatus.Start,
      player: {
        currentLocation: WorldLocations.Start
      }
    })
  }
}
