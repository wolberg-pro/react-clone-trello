import React from 'react'
import './map.scss'
import Header from '../../common/header'
import Footer from '../../common/footer'
// tslint:disable-next-line: no-empty-interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
}

class GameMap extends React.Component<Props> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { props } = this

    return (
      <div className="flex flex-col">
        <header className="px-4 py-2 m-2">
          <Header />
        </header>
        <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          {props.children}
        </div>
        <footer className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <Footer />
        </footer>
      </div>
    )
  }
}

export default GameMap
