/* Slice reducer Implementation */
import { createStore, combineReducers } from 'redux'

//For the comments sections.
function addComments(postId, commentText) {
  const commentId = parseInt(Math.random(10) * 1000);
  return {
    type: 'ADD_COMMENT',
    payload: { postId, commentId, commentText }
  }
}


function addCommentsById(state = {}, action) {
  if (action.type === 'ADD_COMMENT') {
    const { commentId, commentText } = action.payload;
    return {
      ...state,
      [commentId]: {
        id: commentId,
        text: commentText
      }
    }
  }
  return state;
}

function addCommentAllId(state = [], action) {
  if (action.type === 'ADD_COMMENT') {
    const { commentId } = action.payload;
    return [...state, commentId]
  }
  return state;
}

const commentsReducer = combineReducers({
  byId: addCommentsById,
  allIds: addCommentAllId
});






//For the posts
function addPost(postId, postText) {
  return {
    type: 'ADD_POST',
    payload: { postId, postText }
  }
}


function addCommentsToPost(state = {}, action) {
  if (action.type === 'ADD_COMMENT') {
    const { postId, commentId } = action.payload;
    const post = state[postId];
    return {
      ...state,
      [postId]: {
        ...post,
        comments: [...post.comments, commentId]
      }
    }
  }
  return state;
}

function addPostById(state = {}, action) {
  if (action.type === 'ADD_POST') {
    const { postId, postText } = action.payload;
    return {
      ...state,
      [postId]: {
        id: postId,
        text: postText,
        comments: []
      }
    }
  }
  return state;
}

function addPostAllId(state = [], action) {
  if (action.type === 'ADD_POST') {
    const { postId } = action.payload;
    return [...state, postId]
  }
  return state;
}

function postReducer(state = {
  byId: {},
  allIds: []
}, action) {
  switch (action.type) {
    case 'ADD_POST':
      return {
        byId: addPostById(state.byId, action),
        allIds: addPostAllId(state.allIds, action)
      };
    case "ADD_COMMENT":
      return {
        ...state,
        byId: addCommentsToPost(state.byId, action)
      }
    default: return state;
  }
}





//Store Works
const blogReducer = combineReducers({
  posts: postReducer,
  comments: commentsReducer
});
const store = createStore(blogReducer);
store.subscribe(function () {
  console.log(store.getState());
})
store.dispatch({ type: '@init/APP_INIT' });

//AddingPost
store.dispatch(addPost(1, "Apple Post"))
store.dispatch(addPost(2, "Banana Post"))

//Add comments to post 1.
store.dispatch(addComments(1, "NicePost aboutapple"))
store.dispatch(addComments(1, "NicePost about apple"))
store.dispatch(addComments(1, "NicePost aboutapple"))
store.dispatch(addComments(1, "NicePost about apple"))
store.dispatch(addComments(1, "NicePost aboutapple"))
store.dispatch(addComments(1, "NicePost about apple"))
store.dispatch(addComments(1, "NicePost aboutapple"))
store.dispatch(addComments(1, "NicePost about apple"))
//Add comments to post 2.
store.dispatch(addComments(2, "NicePost about Banana"))
