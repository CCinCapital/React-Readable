/******************************************************************/
/******************************************************************/
/*****************         Root Store         *********************/
/******************************************************************/
/******************************************************************/

import {
  FILT,
  SHOW_FILTER_OPTIONS,

  SORT,
  SHOW_SORTER_OPTIONS,

  SHOW_POSTS_EDITOR,
  HANDLE_EDIT_POST,

  ADD_POST,
  ACTIVE_POST,
  RECEIVE_POSTS,
  REVISE_POST,
  REMOVE_POST,

  FIND_POST,

  ADD_COMMENT,
  RECEIVE_COMMENTS,
  REVISE_COMMENT,
  REMOVE_COMMENT,
  HANDLE_EDIT_COMMENT,
  SHOW_COMMENT_EDITOR,
} from '../actions/type'

const postEditorInitializer = {
  postToEdit: null,
  buffer: {
    titleBuffer: '',
    categoryBuffer: '',
    bodyBuffer: '',
  },
  isModalOpen: false,
  isNewPost: false,
}

const commentEditorInitializer = {
  commentToEdit: null,
  buffer: '',
  editExistingComment: false,
}

const initialRootStore = {
  posts: {},
  activePost: {
    id: null,
    post: null,
    comments: null,
  },
  postEditor: postEditorInitializer,
  commentEditor: commentEditorInitializer,
  sorter: {
    sortOptions: {
      default: {
        name: 'timestamp',
        img: 'arrange.svg',
        title: 'sort by : ',
      },
      timestamp: {
        name: 'timestamp',
        img: 'timestamp.svg',
        title: 'lastest reply',
      },
      voteScore: {
        name: 'voteScore',
        img: 'vote.svg',
        title: '# of votes',
      },    
    }, 
    postsSorter: {
      isOptionVisible: false,
      sortBy: 'timestamp',    
    },
    commentsSorter: {
      isOptionVisible: false,
      sortBy: 'timestamp',    
    },
  },
  categories: {
    categoriesList: {
      all: {
        category: 'all',
        img: 'all.svg',
        title: 'all topics',
      },
      react: {
        category: 'react',
        img: 'react.svg',
        title: 'react',
      },
      redux: {
        category: 'redux',
        img: 'redux.png',
        title: 'redux',
      },
      udacity: {
        category: 'udacity',
        img: 'udacity.svg',
        title: 'udacity',
      },    
    },
    filter: {
      isOptionVisible: false,
      filtBy: 'all',    
    },
  }
}

export function rootStore (state = initialRootStore, action) {
  switch (action.type) {

    case FILT:
      return {
        ...state,
        categories: {
          ...state.categories,
          filter: {
            ...state.categories.filter,
            isOptionVisible: false,
            filtBy: action.opt,
          }          
        } 
      }
    case SHOW_FILTER_OPTIONS: 
      return {
        ...state,
        categories: {
          ...state.categories,
          filter: {
            ...state.categories.filter,
            isOptionVisible: action.opt,
          }          
        } 
      }    
    //**************************************************
    //*************   SORTER  **************************
    //**************************************************
    case SORT:
      return {
        ...state,
        sorter: {
          ...state.sorter,
          [action.sorter]: {
            ...state.sorter[action.sorter],
            isOptionVisible: false,
            sortBy: action.opt,
          }                 
        } 
      }
    case SHOW_SORTER_OPTIONS:
      return {
        ...state,
        sorter: {
          ...state.sorter,
          [action.sorter]: {
            ...state.sorter[action.sorter],
            isOptionVisible: action.opt,
          }                 
        } 
      }  
    //**************************************************
    //*************   POSTS  **************************
    //**************************************************  
    case FIND_POST: {
      return {
        ...state,
        activePost: {
          ...state.activePost,
          id: action.id,
          post: action.post,
        }
      }
    }
    case RECEIVE_POSTS: 
      return {
        ...state,
        posts: Object.entries(action.posts).map(post => {
                 return post[1]
               })
      }
    case ADD_POST: 
      return {
        ...state,
        posts: {
          ...state.posts,
          [Object.keys(state.posts).length]: action.post,         
        },
        postEditor: postEditorInitializer,
        activePost: {
          ...state.activePost,
          post: action.post,
        }
      }
    case ACTIVE_POST:
      return {
        ...state,
        activePost: {
          ...state.activePost,
          post: action.post,
        },
      }
    case REVISE_POST:
      const [key, ] = Object.entries(state.posts).filter(post => post[1].id === action.post.id)
      return {
        ...state,
        posts: {
          ...state.posts,
          [key[0]]: action.post,        
        },
        activePost: {
          ...state.activePost,
          post: action.post,
        },
        postEditor: postEditorInitializer,
      }
    case REMOVE_POST:
      const [i, ] = Object.entries(state.posts).filter(post => post[1].id === action.id)
      return {
        ...state,
        posts: {
          ...state.posts,
          [i[0]]: {
            ...state.posts[i[0]],
            deleted: true,
          },            
        },
        activePost: {
          ...state.activePost,
          post: null,
        },
      }
    case SHOW_POSTS_EDITOR:
      return {
        ...state,
        postEditor: {
          ...state.postEditor,
          postToEdit: action.post,
          isModalOpen: action.isOpen,
          isNewPost: action.isNew,
          buffer: {
            ...state.postEditor.buffer,
            titleBuffer: action.post === null ? '' : action.post.title,
            categoryBuffer: action.post === null ? '' : action.post.category,
            bodyBuffer: action.post === null ? '' : action.post.body,           
          }
        }
      }
    case HANDLE_EDIT_POST:
      return {
        ...state,
        postEditor: {
          ...state.postEditor,
          buffer: {
            ...state.postEditor.buffer,
            titleBuffer: action.post.title,
            categoryBuffer: action.post.category,
            bodyBuffer: action.post.body,           
          }
        }
      }

    //**************************************************
    //*************  COMMENTS **************************
    //**************************************************  
    case SHOW_COMMENT_EDITOR:
      return {
        ...state,
        commentEditor: {
          ...state.commentEditor,
          commentToEdit: action.comment,
          buffer: action.comment.body,
          editExistingComment: action.editExistingComment,
        }
      }
    case RECEIVE_COMMENTS:
      return {
        ...state,
        activePost: {
          ...state.activePost,
          comments: action.comments,
        }
      } 
    case ADD_COMMENT: 
      return {
        ...state,
        activePost: {
          ...state.activePost,
          comments: {
            ...state.activePost.comments,
            [Object.keys(state.activePost.comments).length]: action.comment,          
          }
        },
        commentEditor: commentEditorInitializer,
      }
    case REMOVE_COMMENT: 
      const [j, ] = Object.entries(state.activePost.comments).filter(comment => comment[1].id === action.id)
      return {
        ...state,
        activePost: {
          ...state.activePost,
          comments: {
            ...state.activePost.comments,
            [j[0]]: {
              ...state.activePost.comments[j[0]],
              deleted: true,
            }
          }       
        }
      }
    case REVISE_COMMENT: {
      const [k, ] = Object.entries(state.activePost.comments).filter(comment => comment[1].id === action.comment.id)
      return {
        ...state,
        activePost: {
          ...state.activePost,
          comments: {
            ...state.activePost.comments,
            [k[0]]: {
              ...state.activePost.comments[k[0]],
              body: action.comment.body,
              voteScore: action.comment.voteScore,
            }
          }       
        },
        commentEditor: commentEditorInitializer,
      }
    }               
    case HANDLE_EDIT_COMMENT:
      return {
        ...state,
        commentEditor: {
          ...state.commentEditor,
          buffer: action.comment,
        }
      }         
    default:
      return state
  }
}
