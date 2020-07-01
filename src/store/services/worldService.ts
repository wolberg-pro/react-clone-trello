/* eslint-disable no-param-reassign */
import { Subject, Observable, of } from 'rxjs'
import { mergeMap } from 'rxjs/operators'
import { WorldStatus, WorldState, WorldLocations, initialWorldState } from '../dto/world'
import { AppDispatch } from '../../common/types'

export class WorldService {
  private static instance: WorldService

  private translate: any

  private subject$: Subject<WorldState> = new Subject<WorldState>()

  private dispatch: AppDispatch | undefined = null

  private worldState!: WorldState

  private constructor() {
    this.subject$.pipe(
      mergeMap((worldState: WorldState) => this.loadWorldStage(worldState))
    )
  }

  static getInstance(): WorldService {
    if (!WorldService.instance) {
      WorldService.instance = new WorldService()
    }

    return WorldService.instance
  }

  public initWorld(dispatch: AppDispatch | undefined, translate: any): void {
    this.dispatch = dispatch
    this.translate = translate
    this.subject$.next(initialWorldState)
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

  public updateMapState(worldState: WorldState): void {
    this.subject$.next(worldState)
  }
}
