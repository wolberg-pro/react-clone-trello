
export interface UserProfile {
  email: string
}

export interface TodoValue {
  text: string
  done: boolean
}

// create schema for the DB
export interface DBSchema {
  todos: TodoValue
  [name: string]: any
}
