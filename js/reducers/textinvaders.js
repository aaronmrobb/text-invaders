import { combineReducers } from 'redux'
import R from 'ramda'
import randomWords from 'random-words'


const initialState = {
  playing: false,
  board: new Array(8).fill('x').map((row) => {
    return new Array(5).fill('')
  }),
  score: 0,
  time: 0,
  speed: 5,
  difficulty: 3,
  lost: false
}

const game = (state = initialState, action) => {
  switch(action.type) {
    case 'START_GAME':
      state.playing = true
      return state
    case 'RESTART_GAME':
      return {
        playing: false,
        board: new Array(8).fill('x').map((row) => {
          return new Array(5).fill('')
        }),
        score: 0,
        time: 0,
        speed: 5,
        difficulty: 3,
        lost: false
      }
    case 'TIME_INCREASE':
      state.time = state.time + 1
      if(state.time % 30 === 0) {
        state.speed = state.speed - 1
      }
      if(state.time % 60 === 0 ) {
        state.difficulty = state.difficulty + 1
      }
      if (state.time % state.speed === 0 || state.time === 1) {
        state.board.unshift(new Array(5).fill('x').map((cell) => {
          return Math.random() > state.difficulty / 10 ? '' : randomWords()
        }))
        const popped = state.board.pop()
        if (R.filter(cell => cell.length !== 0, popped).length > 0) {
          state.lost = true
          return state
        }
        return state
      }
      return state
    case 'SHOOT_WORD':
      state.score = state.score + state.board[action.target[0]][action.target[1]].length * 5
      state.board[action.target[0]][action.target[1]] = ''
      return state
    default:
      return state
  }
}

const textInvaders = combineReducers({game})

export default textInvaders
