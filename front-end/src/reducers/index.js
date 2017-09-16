import { combineReducers } from 'redux'

import { user as user } from './user'
import { rootStore as rootStore } from './rootStore'


export default combineReducers({
  rootStore,
  user,
}) 