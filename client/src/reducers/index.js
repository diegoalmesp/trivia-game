import { combineReducers } from 'redux'
import data from './data'

const appReducer = combineReducers({
  data,
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
      state = undefined
  }
  return appReducer(state, action)
};

export default rootReducer
