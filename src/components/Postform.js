import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost, updatePost } from '../actions/postActions';
import store from '.././store';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(prevProp, prevState) {
    const id = this.props.match.params.id || null;
    const posts = store.getState() || [];
    if (id && id !== prevProp.match.params.id) {
      const post = posts.posts.items.find(p => p.id === +id);
      this.setState({
        title: post.title,
        body: post.body
      })
    }   
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };
    
    if (this.props.match.params.id) {
      this.props.updatePost(post, this.props.match.params.id)
    } else {
      this.props.createPost(post);
    }

    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              autoComplete="off"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired
};

export default connect(null, { createPost, updatePost })(PostForm);
