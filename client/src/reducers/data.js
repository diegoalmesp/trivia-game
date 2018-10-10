import * as types from '../actions/types'

const initialState = {
  trivia: [],
  fetching: false,
  fetchError: false,
  correct: 0,
  incorrect: 0,
  stats: {
    won: 0,
    lost: 0,
    ties: 0,
  }
}

const data = (state = initialState, action) => {
  switch (action.type) {
    /**
     * api fetch
     */
    case types.FETCH_DATA:
      return {
        ...state,
        trivia: action.payload
      }
    case types.IS_FETCHING:
      return {
        ...state,
        fetching: true
      }
    case types.DONE_FETCHING:
      return {
        ...state,
        fetching: false
      }
    case types.ERROR_FETCHING:
      return {
        ...state,
        fetching: false,
        fetchError: true
      }
    /**
     * gameplay
     */
    case types.CORRECT:
      let correct = state.correct
      let triviaCorrect = state.trivia
      triviaCorrect[action.payload.index].answer_correct = true
      return {
        ...state,
        correct: ++correct,
        trivia: triviaCorrect,
      }
    case types.INCORRECT:
      let incorrect = state.incorrect
      let triviaIncorrect = state.trivia
      triviaIncorrect[action.payload.index].answer_correct = false
      return {
        ...state,
        incorrect: ++incorrect,
        trivia: triviaIncorrect,
      }
    case types.RESET_SCORE:
      return {
        ...state,
        correct: 0,
        incorrect: 0
      }
    default:
      return state
  }
}

export default data
