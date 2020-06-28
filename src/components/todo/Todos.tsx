import React from 'react'
import { isLoaded, isEmpty, useFirebaseConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/reducers'
import Todo from './Todo'

function Todos() {
  useFirebaseConnect([{ path: 'todos', queryParams: ['limitToLast=10'] }])
  const todos = useSelector((state: AppState) => {
    return (state.firebase.ordered.todos) ? state.firebase.ordered.todos.filter(todoItem => !todoItem.done) : [];
  })

  if (!isLoaded(todos)) {
    return <div>Loading...</div>
  }

  if (isEmpty(todos)) {
    return <div>No Todos Found</div>
  }

  return (
    <div className="Todos">
      {todos &&
        todos

          .map(todoItem => {
            return <Todo key={todoItem.key} todoId={todoItem.key} />
          })}
    </div>
  )
}

export default Todos
