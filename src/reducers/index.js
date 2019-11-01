import { combineReducers } from 'redux'
import userSignIn from './signin'
import cartReducers from './cartReducer'

export default combineReducers({
  user:userSignIn,
  products:cartReducers
})