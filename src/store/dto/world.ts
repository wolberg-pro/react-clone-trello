export enum WorldStatus {
  Start,
  Building,
  LoadingPlayer,
  Done,
  Error
}
export enum WorldLocations {
  Start,
  AboutMe,
  MySkills,
  MiniGames,
  MyProjects,
  ContactMe
}
export enum WorldItemMetaData {
  RoadLine,
  RoadLineR,
  RoadLineL,
  RoadLineT,
  RoadLineX,
  Rock,
  Tree,
  House,
  SpawnPoint
}
export interface Player {
  currentLocation: WorldLocations
}
export interface WorldItem {
  type: WorldItemMetaData
  posX: number
  posY: number
}
export interface WorldMapDefinitions {
  title: string
  shortInfo: string
  sizeW: number
  sizeH: number
  roundWater: boolean
  borderEdge: boolean
  treeFactor: number
  rockFactor: number
  wonderNpcs?: boolean
  entitiesNpcs?: string
  entitiesBlockMovement: WorldItemMetaData[]
  entities: WorldItem[]
}
export interface WorldLocation {
  assetTileName: string
  location: WorldLocations
  isComingSoon: boolean
  isDisable: boolean
  title: string
  shortInfo: string
}

export interface WorldState {
  errorMessage?: string
  definitions: WorldMapDefinitions
  status: WorldStatus
  locations: WorldLocation[]
  player: Player
}
