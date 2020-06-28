import React from 'react'
import './coffie.scss'

interface Props {
  width: string
  height: string
}

const coffieBreak = (props: Props) => {
  return (
    <div
      className="container"
      style={{ width: props.width, height: props.height }}>
      <div className="shelf">
        <div className="bowls"></div>
        <div className="bowls"></div>
        <div className="bowls"></div>
        <div className="bottle"></div>
        <div className="food-ctn"></div>
      </div>
      <div className="shelf">
        <div className="salt"></div>
        <div className="pepper"></div>
        <div className="jar">
          <div className="jar-in"></div>
        </div>
      </div>
      <div className="coffee-maker">
        <div className="coffee-maker-bottom">
          <div className="coffee-maker-bottom-in"></div>
          <div className="bolt"></div>
        </div>
        <div className="coffee-maker-middle"></div>
        <div className="coffee-maker-top">
          <div className="coffee-maker-top-in"></div>
          <div className="beak"></div>
          <div className="hat"></div>
          <div className="hat-top">
            <div className="hat-top-in"></div>
          </div>
          <div className="handle">
            <div className="handle-part"></div>
            <div className="handle-part"></div>
            <div className="handle-part"></div>
            <div className="handle-part"></div>
            <div className="handle-part"></div>
          </div>
        </div>
      </div>
      <div className="hob">
        <div className="hob-part"></div>
        <div className="hob-part"></div>
        <div className="hob-part"></div>
        <div className="gas">
          <div className="flames-1">
            <div className="flame"></div>
            <div className="flame"></div>
            <div className="flame"></div>
            <div className="flame"></div>
            <div className="flame"></div>
            <div className="flame"></div>
            <div className="flame"></div>
            <div className="flame"></div>
            <div className="flame"></div>
            <div className="flame"></div>
            <div className="flame"></div>
            <div className="flame"></div>
          </div>
          <div className="flames-2">
            <div className="flame flame-back"></div>
            <div className="flame flame-back"></div>
            <div className="flame flame-back"></div>
            <div className="flame flame-back"></div>
            <div className="flame flame-back"></div>
            <div className="flame flame-back"></div>
            <div className="flame flame-back"></div>
            <div className="flame flame-back"></div>
            <div className="flame flame-back"></div>
            <div className="flame flame-back"></div>
            <div className="flame flame-back"></div>
            <div className="flame flame-back"></div>
          </div>
        </div>
        <div className="knob knob-right"></div>
        <div className="knob knob-left"></div>
        <div className="cup">
          <div className="cup-in"></div>
          <div className="cup-handle"></div>
          <div className="cup-saucer"></div>
          <div className="coffee"></div>
          <div className="splashes">
            <div className="splash"></div>
            <div className="splash"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default coffieBreak
