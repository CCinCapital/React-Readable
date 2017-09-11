const AUTHORIZATION_TOKEN = 'NEVER_MIND'
const URL = 'http://localhost:5001'
const HEADERS = {
  'Accept': 'application/json', 
  'Content-Type': 'application/json',
  'Authorization': AUTHORIZATION_TOKEN,
}

// Get all of the categories available for the app. List is found in categories.js.
export function getAllCategories () {
  let url = URL + '/categories'

  return fetch(url, { 
    method: 'GET',
    headers: { 
      ...HEADERS
    }})
    .then((res) => res.json())
    .then((data) => data.categories)
}

//Get all of the posts. Useful for the main page when no category is selected.
export function getAllPosts () {
  let url = URL + '/posts'

  return fetch(url, { 
    method: 'GET',
    headers: { 
      ...HEADERS
    }})
    .then((res) => res.json())
    .then((data) => data)
}

//Get all of the posts for a particular category
export function getAllPostsInCategory( category ) {
  let url = URL + '/' + category + '/posts'

  return fetch(url, { 
    method: 'GET',
    headers: { 
      ...HEADERS
    }})
    .then((res) => res.json())
    .then((data) => data)
}

//Get the details of a single post
export function getPost ( post_id ) {
  let url = URL + '/posts/' + post_id

  return fetch(url, { 
    method: 'GET',
    headers: { 
      ...HEADERS
    }})
    .then((res) => res.json())
    .then((data) => data)
}

//Get all the comments for a single post
export function getALLCommentsOfPost ( post_id ) {
  let url = URL + '/posts/' + post_id + '/comments'

  return fetch(url, { 
    method: 'GET',
    headers: { 
      ...HEADERS
    }})
    .then((res) => res.json())
    .then((data) => data)
}

//Get the details for a single comment
export function getComment ( comment_id ) {
  let url = URL + '/comments/' + comment_id

  return fetch(url, { 
    method: 'GET',
    headers: { 
      ...HEADERS
    }})
    .then((res) => res.json())
    .then((data) => data)
}

//Add a new post
export function addNewPost ( post ) {
  let url = URL + '/posts'

  return fetch(url, {
      method: 'POST',
      headers: {
        ...HEADERS
      },
      body: JSON.stringify({
        id: post.id,
        timestamp: post.timestamp,
        title: post.title,
        body: post.body,
        author: post.author,
        category: post.category,
      })
  }).then(res => res.json())
}

//Used for voting on a post. [upVote] or [downVote]
export function votePost (vote) {
  let url = URL + '/posts/' + vote.id

  return fetch(url, {
      method: 'POST',
      headers: {
        ...HEADERS
      },
      body: JSON.stringify({
        option: vote.option
      })
  }).then(res => res.json())
}

//Edit the details of an existing post
export function editPost ( post ) {
  let url = URL + '/posts/' + post.id

  return fetch(url, {
      method: 'PUT',
      headers: {
        ...HEADERS
      },
      body: JSON.stringify(post)
  }).then(res => res.json())
}

//Sets the deleted flag for a post to 'true'. 
//Sets the parentDeleted flag for all child comments to 'true'.
export function deletePost ( post_id ) {
  let url = URL + '/posts/' + post_id
  
  return fetch(url, {
      method: 'DELETE',
      headers: {
        ...HEADERS
      }
  })
}

//Add a comment to a post
export function addCommentToPost (comment) {
  let url = URL + '/comments'

  return fetch(url, {
      method: 'POST',
      headers: {
        ...HEADERS
      },
      body: JSON.stringify({
        id: comment.id,
        parentId: comment.parentId,
        timestamp: comment.timestamp,
        body: comment.body,
        author: comment.author,
      })
  }).then(res => res.json())  
}

//Used for voting on a comment. [upVote] or [downVote]
export function voteComment (vote) {
  let url = URL + '/comments/' + vote.id

  return fetch(url, {
      method: 'POST',
      headers: {
        ...HEADERS
      },
      body: JSON.stringify({
        option: vote.option
      })
  }).then(res => res.json())
}

//Edit the details of an existing comment
export function editComment (comment) {
  let url = URL + '/comments/' + comment.id
  return fetch(url, {
      method: 'PUT',
      headers: {
        ...HEADERS
      },
      body: JSON.stringify(comment)
  }).then(res => res.json())  
}

//Sets a comment's deleted flag to 'true'
export function deleteComment ( comment_id ) {
  let url = URL + '/comments/' + comment_id

  return fetch(url, {
      method: 'DELETE',
      headers: {
        ...HEADERS
      }
  })  
}