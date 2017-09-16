import { combineReducers } from 'redux'

import { user  } from './user'
import { rootStore } from './rootStore'


export default combineReducers({
  rootStore,
  user,
}) 