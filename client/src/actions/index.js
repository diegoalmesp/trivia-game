import Api from '../api'
import history from '../history'
import * as types from './types'

/**
 * api fetch
 */
export const fetchDataSuccess = data => ({
  type: types.FETCH_DATA,
  payload: data
})

export const isFetching = () => ({
  type: types.IS_FETCHING,
})

export const doneFetching = () => ({
  type: types.DONE_FETCHING,
})

export const fetchError = () => ({
  type: types.ERROR_FETCHING,
})

export const fetchData = (category) => {
  return dispatch => {
    dispatch(isFetching())

    return Api.fetchData(category)
      .then(res => {
        dispatch(fetchDataSuccess(res.data.payload.results))
        dispatch(doneFetching())
        history.push('/app')
      })
      .catch(error => {
        dispatch(fetchError())
        throw(error)
      })
  }
}

/**
 * gameplay
 */
export const correctAnswer = (i) => ({
  type: types.CORRECT,
  payload: {index: i}
})

export const incorrectAnswer = (i) => ({
  type: types.INCORRECT,
  payload: {index: i}
})

export const resetScore = () => ({
  type: types.RESET_SCORE
})

export const finishedSuccess = () => ({
  type: types.FINISHED_GAME
})

export const finishGame = () => {
  return dispatch => {
    dispatch(finishedSuccess())
    return history.push('/results')
  }
}

export const resetData = () => ({
  type: types.RESET
})