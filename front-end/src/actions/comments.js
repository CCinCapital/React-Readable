/******************************************************************/
/******************************************************************/
/*****************           Comments         *********************/
/******************************************************************/
/******************************************************************/
import * as fetchAPI from '../utils/API'

import {
	ADD_COMMENT,
	HANDLE_EDIT_COMMENT,
	RECEIVE_COMMENTS,
	REMOVE_COMMENT,
	REVISE_COMMENT,
	SHOW_COMMENT_EDITOR,
} from './type'


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

