import React from 'react'
import { Game, Scene, Text } from 'react-phaser-fiber'

interface Props {
  width: number
  height: number
}

class Map extends React.Component<Props> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props)
  }

  // eslint-disable-next-line class-methods-use-this
  private onLoadAssets(scene: Phaser.Scene): void {
    scene.load.atlasXML(
      'map',
      'assets/tiles/maptiles.png',
      'assets/tiles/maptiles.xml'
    )
  }

  public componentDidMount(){
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
          )}>
          </Scene>
      </Game>
    )
  }
}

export default Map
