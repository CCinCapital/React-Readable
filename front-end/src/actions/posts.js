/******************************************************************/
/******************************************************************/
/*****************             Posts          *********************/
/******************************************************************/
/******************************************************************/
import * as fetchAPI from '../utils/API'

import {
  ACTIVE_POST,
  ADD_POST,
  FIND_POST,
  HANDLE_EDIT_POST,
  RECEIVE_POSTS,
  REVISE_POST,
  REMOVE_POST,
  SHOW_POSTS_EDITOR,
} from './type'

export function showPostEditor (post, isOpen, isNew) {
  return {
    type: SHOW_POSTS_EDITOR,
    post,
    isOpen,
    isNew,
  }
}

export function addPost (post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function asyncSubmitPost (post) {
  return dispatch => {
    fetchAPI
      .addNewPost(post)
      .then(post => dispatch(addPost(post)))
  }
}

export function asyncFetchAllPosts () {
  return dispatch => {
    fetchAPI
      .getAllPosts()
      .then(posts => dispatch(receivePosts(posts)))
  }
}

export function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  }
}

export function handleEditPost (post) {
  return {
    type: HANDLE_EDIT_POST,
    post,
  }
}

export function asyncUpdatePost (post) {
  return dispatch => {
    fetchAPI
      .editPost (post)
      .then (post => dispatch(revisePost(post)))
  }
}

export function activePost (post) {
  return {
    type: ACTIVE_POST,
    post,
  }
}

export function asyncVotePost (vote) {
  return dispatch => {
    fetchAPI
      .votePost (vote)
      .then (post => dispatch(revisePost(post)))
  }
}

export function revisePost (post) {
  return {
    type: REVISE_POST,
    post,
  }
}

export function asyncDeletePost (post) {
  return dispatch => {
    fetchAPI
      .deletePost (post.id)
      .then (res => dispatch(removePost(post.id)))
  }
}

export function removePost (id) {
  return {
    type: REMOVE_POST,
    id,
  }
}

export function findPost (id, post) {
  return {
    type: FIND_POST,
    id,
    post,
  }
}