export enum WorldStatus {
  Start,
  Building,
  LoadingPlayer,
  Done
}
export enum WorldLocations {
  Start,
  AboutMe,
  MySkills,
  MiniGames,
  MyProjects,
  ContactMe
}
export interface Player {
  currentLocation: WorldLocations
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
  status: WorldStatus
  locations: WorldLocation[]
  player: Player
}
