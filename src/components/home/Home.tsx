import React from 'react'
import Todos from '../todo/Todos'
import AddTodo from '../todo/AddTodo'
import GameMapLayout from '../layout/GameMap'
import './Home.scss'

function Home() {
  return (
    <GameMapLayout>
      <div className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <Todos />
          <AddTodo />
        </div>
      </div>
    </GameMapLayout>
  )
}

export default Home
