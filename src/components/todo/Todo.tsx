import React from 'react'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { TodoValue } from '../../store/dto/todo'
import { AppState } from '../../store/reducers/reducer'

interface TodoProps {
  todoId: string
}

function Todo({ todoId }: TodoProps) {
  const todo: TodoValue = useSelector((state: AppState) => {
    return state.firebase.data.todos && state.firebase.data.todos[todoId]
  })
  const firebase = useFirebase()
  function toggleDoneState() {
    firebase.update(`todos/${todoId}`, { done: !todo.done })
  }

  return (
    <div className="Todo">
      <input type="checkbox" onClick={toggleDoneState} />
      {todo.text}
    </div>
  )
}

export default Todo
