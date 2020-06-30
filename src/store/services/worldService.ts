import { Subject, Observable, of } from 'rxjs'
import { tap, mergeMap } from 'rxjs/operators'
import { WorldStatus, WorldState, WorldLocations, WorldLocation } from '../dto/world';
import { AppDispatch } from '../../common/types'

export class WorldService {
  private static instance: WorldService

  private constructor() {}

  static getInstance(): WorldService {
    if (!WorldService.instance) {
      WorldService.instance = new WorldService()
    }

    return WorldService.instance
  }

  private subject$: Subject<WorldState> = new Subject<WorldState>()

  private dispatch: AppDispatch = null

  public initWorld(dispatch: AppDispatch): void {
    this.dispatch = dispatch
    this.subject$.complete()
    this.subject$.pipe(
      tap((worldState: WorldState) => this.loadWorldStage(worldState))
      mergeMap((worldState: WorldState) => this.parseWorldState(worldState))
    )
  }

  private loadWorldStage(worldState: WorldState): void {
    switch (worldState.status) {
      case WorldStatus.Start:
        this.initWorldBuild()
        break
      case WorldStatus.Building:
        this.handleWorldBuild()
        break
      case WorldStatus.LoadingPlayer:
        this.handlePlayer()
        break
      case WorldStatus.Done:
        this.finalizedWorld()
        break
    }
  }
  private parseWorldState(worldState: WorldState): Observable<WorldState> {
    return of(worldState);
  }

  private initWorldBuild(): void {}

  private handleWorldBuild(): void {}

  private handlePlayer(): void {}

  private finalizedWorld(): void {}
  private initWorldLocations() :WorldLocation[] {
  return [
        {
          assetTileName: '',
          location: WorldLocations.Start,
          isComingSoon: false,
          isDisable: false,
          title: 'Start location',
          shortInfo: 'Here the journey start'
        },{
          assetTileName: '',
          location: WorldLocations.AboutMe,
          isComingSoon: true,
          isDisable: false,
          title: 'About my self',
          shortInfo: 'Here in the journey we will talk about my self'
        },{
          assetTileName: '',
          location: WorldLocations.MySkills,
          isComingSoon: true,
          isDisable: false,
          title: 'Here my skills',
          shortInfo: 'when going on journey you need know skills don\'t we?'
        },{
          assetTileName: '',
          location: WorldLocations.MiniGames,
          isComingSoon: false,
          isDisable: true,
          title: 'Mini Games',
          shortInfo: 'let have fun on this journey let\'s play'
        },{
          assetTileName: '',
          location: WorldLocations.MyProjects,
          isComingSoon: false,
          isDisable: true,
          title: 'My Projects',
          shortInfo: 'let see what i did on this journey please not many things on journey wasn\'t included'
        },{
          assetTileName: '',
          location: WorldLocations.ContactMe,
          isComingSoon: false,
          isDisable: false,
          title: 'Contact Me',
          shortInfo: 'One journey and next one about to start wish talk to me?'
        }
      ]
  }
  public get getWorld(): Observable<WorldState> {
    return this.subject$.asObservable()
  }

  public renderMap(): void {
    this.subject$.next({
      locations: this.initWorldLocations(),
      status: WorldStatus.Start,
      player: {
        currentLocation: WorldLocations.Start
      }
    })
  }
}
