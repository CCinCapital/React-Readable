import * as fetchAPI from '../utils/API'

/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/*****************            Login           *********************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/

export const SHOW_USER_LOGIN = 'SHOW_USER_LOGIN'
export const LOGIN_USER = 'LOGIN_USER'
export const CACHE_URL = 'CACHE_URL'

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

export function cacheURL (URL) {
  return {
    type: CACHE_URL,
    URL,
  }
}

// Sorter
export const SORT = 'SORT'
export const SHOW_SORTER_OPTIONS = "SHOW_SORTER_OPTIONS"

export function sort (sorter, opt) {
  return {
    type: SORT,
    sorter,
    opt,
  }   
}

export function showSorterOptions (sorter, opt) {
  return {
    type: SHOW_SORTER_OPTIONS,
    sorter,
    opt,
  }
}



// Filter
export const FILT = 'FILT'
export const SHOW_FILTER_OPTIONS = "SHOW_FILTER_OPTIONS"

export function filt (opt) {
  return {
    type: FILT,
    opt,
  }   
}

export function showfilterOptions (opt) {
  return {
    type: SHOW_FILTER_OPTIONS,
    opt,
  }
}


/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/*****************        Post Editor         *********************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
export const SHOW_POSTS_EDITOR = 'SHOW_POSTS_EDITOR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const REVISE_POST = 'REVISE_POST'
export const ACTIVE_POST = 'ACTIVE_POST'
export const HANDLE_EDIT_POST ='HANDLE_EDIT_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const FIND_POST = 'FIND_POST'


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

export function activePost (post) {
  return {
    type: ACTIVE_POST,
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


/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/*****************           Comments         *********************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
/******************************************************************/
export const SHOW_COMMENT_EDITOR = 'SHOW_COMMENT_EDITOR'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const HANDLE_EDIT_COMMENT = 'HANDLE_EDIT_COMMENT'
export const REVISE_COMMENT = 'REVISE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'


export function receiveComments (comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  }
}

export function asyncFetchCommentsUnderPost (id) {
  return dispatch => {
    fetchAPI
      .getALLCommentsOfPost(id)
      .then(comments => dispatch(receiveComments(comments)))
  }
}

export function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

export function asyncPostComment (comment) {
  return dispatch => {
    fetchAPI
      .addCommentToPost (comment)
      .then(comment => dispatch(addComment(comment)))
  }
}

export function handleEditComment (comment) {
  return {
    type: HANDLE_EDIT_COMMENT,
    comment,
  }
}

export function reviseComment (comment) {
  return {
    type: REVISE_COMMENT,
    comment,
  }
}

export function asyncUpdateComment (comment) {
  return dispatch => {
    fetchAPI
      .editComment (comment)
      .then (comment => dispatch(reviseComment(comment)))
  }
}

export function asyncVoteComment (vote) {
  return dispatch => {
    fetchAPI
      .voteComment (vote)
      .then (comment => dispatch(reviseComment(comment)))
  }
}


export function removeComment (id) {
  return {
    type: REMOVE_COMMENT,
    id,
  }
}

export function AsyncDeleteComment (comment) {
  return dispatch => {
    fetchAPI
      .deleteComment (comment.id)
      .then (res => dispatch(removeComment(comment.id)))
  }
}

export function showCommentEditor (comment, editExistingComment) {
  return {
    type: SHOW_COMMENT_EDITOR,
    comment,
    editExistingComment,
  }
}

