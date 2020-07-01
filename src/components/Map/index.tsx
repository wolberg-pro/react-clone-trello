import React from 'react'
import i18next from 'i18next'
import { Game, Scene, Text } from 'react-phaser-fiber'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../store/dto/rootState'
import { AppDispatch } from '../../common/types'
import { startLoadWorld } from '../../store/actions/world'
import { worldSelectorFromState } from '../../store/selectors/worldSelect'
import { WorldService } from '../../store/services/worldService'

const mapState = (state: RootState) => ({
  world: worldSelectorFromState(state)
})

const mapDispatch = (dispatch: AppDispatch) => ({
  startBuildWorld: () => dispatch(startLoadWorld())
})

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
  width: number
  height: number
  dispatch?: AppDispatch
}

class Map extends React.Component<Props> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props)
    const { dispatch } = props
    WorldService.getInstance().initWorld(dispatch)
  }

  // eslint-disable-next-line class-methods-use-this
  private onLoadAssets(scene: Phaser.Scene): void {
    scene.load.atlasXML(
      'map',
      'assets/tiles/maptiles.png',
      'assets/tiles/maptiles.xml'
    )
  }

  // eslint-disable-next-line class-methods-use-this
  public componentDidMount(): void {
    const { t } = i18next
    const { startBuildWorld } = this.props
    WorldService.getInstance().renderMap(t)
  }

  public render() {
    const { props } = this

    const preload = this.onLoadAssets.bind(this)
    return (
      <Game
        width={props.width}
        height={props.height}
        scale={{
          mode: Phaser.Scale.FIT
        }}>
        <Scene
          sceneKey="map"
          onPreload={(scene: Phaser.Scene) => {
            preload(scene)
          }}
          renderLoading={progress => (
            <Text
              x={props.width / 2}
              y={props.height / 2}
              text={`Loading... (${progress * 100}%)`}
              style={{ color: 'white' }}
            />
          )}></Scene>
      </Game>
    )
  }
}

export default connect(mapState, mapDispatch)(Map)
