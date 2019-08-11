import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
     return this.state.data && this.state.data.map(d => <div key={d.id}>{d.title}</div>)
  }

}

export default Post;