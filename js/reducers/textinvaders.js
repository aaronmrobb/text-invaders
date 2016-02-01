import { combineReducers } from 'redux'
import R from 'ramda'

const initialState = {
  playing: false,
  board: new Array(8).fill('x').map((row) => {
    return new Array(5).fill('')
  }),
  score: 0,
  time: 0
}

const game = (state = initialState, action) => {
  switch(action.type) {
    case 'START_GAME':
      return state
    case 'TIME_INCREASE'
    default:
      return state
  }
}

const textInvaders = combineReducers({game})

export default textInvaders
