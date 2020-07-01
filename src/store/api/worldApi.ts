import { HttpClient } from '../../common/HttpClient'
import { API_CONFIG } from '../../config/api'
import { WorldState } from '../dto/world'

class worldApi extends HttpClient {
  public constructor() {
    super(API_CONFIG.url)
  }

  public getWorldDefinitions = () =>
    this.instance.get<WorldState>('/mocks/worldDefinition.json')
}

export const WorldApi = new worldApi()
