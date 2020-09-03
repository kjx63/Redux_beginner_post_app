import React, { Component } from 'react';
import './Posts.css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentWillMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }
  render() {
    const postItems = this.state.posts.map((post) => (
      <div key={post.id} className='postItems'>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div className='posts'>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;
