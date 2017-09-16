/******************************************************************/
/******************************************************************/
/*****************            USER            *********************/
/******************************************************************/
/******************************************************************/

import {
  CACHE_URL,
  LOGIN_USER,
  SHOW_USER_LOGIN,
} from '../actions/type'

const initialUserState = {
  user: null,
  isModalOpen: false,
  URLCache: null, 
}

export function user (state = initialUserState, action) {
  switch (action.type) {
    case SHOW_USER_LOGIN:
      return {
        ...state,
        isModalOpen: action.isModalOpen,
      }
    case LOGIN_USER: 
      return {
        ...state,
        user: action.user,
        isModalOpen: false,
      }
    case CACHE_URL:
      return {
        ...state,
        URLCache: action.URL,
      } 
    default: 
      return state
  }
}

