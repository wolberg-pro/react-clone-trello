import React from 'react'
import Todos from '../todo/Todos'
import AddTodo from '../todo/AddTodo'
import './Home.scss'

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <Todos />
          <AddTodo />
        </div>
      </header>
    </div>
  )
}

export default Home
