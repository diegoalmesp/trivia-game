import * as actions from './'
import * as types from './types'

describe('actions', () => {


  it('should create an action to mark an answer as correct by index', () => {
    const payload = {index: 0}
    const expectedAction = {
      type: types.CORRECT,
      payload
    }
    expect(actions.correctAnswer(0)).toEqual(expectedAction)
  })


  it('should create an action to mark an answer as incorrect by index', () => {
    const payload = {index: 0}
    const expectedAction = {
      type: types.INCORRECT,
      payload
    }
    expect(actions.incorrectAnswer(0)).toEqual(expectedAction)
  })
})
