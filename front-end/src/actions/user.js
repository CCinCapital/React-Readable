/******************************************************************/
/******************************************************************/
/*****************         User Login         *********************/
/******************************************************************/
/******************************************************************/

import {
  SHOW_USER_LOGIN,
  LOGIN_USER,
} from './type'

export function showUserLogin (isModalOpen) {
  return {
    type: SHOW_USER_LOGIN,
    isModalOpen,
  }
}

export function loginUser (user) {
  return {
    type: LOGIN_USER,
    user,
  }
}
