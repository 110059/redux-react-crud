import { FETCH_POSTS, NEW_POST, UPDATE_POST, DELETE_POST } from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

export const updatePost = (postData, postId) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: UPDATE_POST,
        payload: post
      })
    );
};

export const deletePost = (postId) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: DELETE_POST,
        payload: post
      })
    );
};



