import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { Link } from 'react-router-dom';
import store from '../store';

class Posts extends Component {



  // depriciated
  /*componentWillMount() {
    this.props.fetchPosts();
  }*/

  componentDidMount() {
    this.props.fetchPosts();
  }

  // depriciated
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  

  /*componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot)
  
  }*/

  /*static getDerivedStateFromProps(nextProps, prevState) {
 
  }
  */

  // this will pass to componentDidUpdate  snapshot
 /*getSnapshotBeforeUpdate(prevProps, prevState) {
    return "snapshot"
 }*/

  deletePost = postId => {
    const posts = store.getState().posts.items.filter(p => p.id !== +postId);
     store.dispatch({
      type: 'Update',
      payload: posts
     })
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        
        <Link to={`/edit/${post.id}`} ><button type='button'>Edit</button></Link>
        <button type='button' onClick={this.deletePost.bind(this, post.id)}>Delete</button>
        <hr />
      </div>
      
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
