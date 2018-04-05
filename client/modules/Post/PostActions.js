import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const THUMBS_UP = 'THUMBS_UP';
export const THUMBS_DOWN = 'THUMBS_DOWN';

// Export Actions
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function addPostRequest(post) {
  return (dispatch) => {
    return callApi('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
        likes: 0,
        dislikes: 0,
      },
    }).then(res => dispatch(addPost(res.post)));
  };
}

export function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    return callApi('posts').then(res => {
      dispatch(addPosts(res.posts));
    });
  };
}

export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
  };
}

export function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  };
}

export function deletePostRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)));
  };
}

export function editPost(cuid, post) {
  return {
    type: EDIT_POST,
    cuid,
    post,
  };
}

export function editPostRequest(cuid, post) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'put', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
    }).then(() => dispatch(editPost(cuid, post)));
  };
}

export function thumbsUp(cuid, likes) {
  return {
    type: THUMBS_UP,
    cuid,
    likes,
  };
}

export function thumbsUpRequest(cuid, likes) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'put', {
      post: {
        likes: likes,
      },
    }).then(() => dispatch(thumbsUp(cuid, likes)));
  };
}

export function thumbsDown(cuid, dislikes) {
  return {
    type: THUMBS_DOWN,
    cuid,
    dislikes,
  };
}

export function thumbsDownRequest(cuid, dislikes) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'put', {
      post: {
        dislikes: dislikes,
      },
    }).then(() => dispatch(thumbsDown(cuid, dislikes)));
  };
}
