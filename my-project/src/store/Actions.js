import { ADD_TODO, LOADING, TODO_TOGGLED } from "./Type"

export const addTodo = text => ({
  type: ADD_TODO,
  payload: { text, id: nanoid() }
})

export const todoToggled = id => ({
  type: TODO_TOGGLED,
  payload: { id }
})

export const loadingActions = (value) => ({
  type: LOADING,
  payload: value
})