import React from 'react'
import './map.scss'
import Header from '../../common/header'
import Footer from '../../common/footer'
// tslint:disable-next-line: no-empty-interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
}

class GameMap extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { props } = this

    return (
      <div className="flex flex-col-reverse bg-gray-200">
        <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <Header />
        </div>
        <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          {props.children}
        </div>
        <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <Footer />
        </div>
      </div>
    )
  }
}

export default GameMap
