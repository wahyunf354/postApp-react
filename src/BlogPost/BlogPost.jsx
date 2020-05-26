import React, { Component } from 'react';
import './BLogPost.css';
import Post from '../../src/component/Post/Post';
import axios from 'axios';
import Loading from '../component/atom/Loading/Loading';

class BLogPost extends Component {
  state = {
    post: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({
      post: [],
      isLoading: true,
    });
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((result) => this.setState({ post: result.data, isLoading: false }));
  }

  render() {
    return (
      <div className='container'>
        <p className='container__title'>Blog Post</p>
        {this.state.isLoading ? <Loading /> : ''}
        {this.state.post.map((post) => {
          return <Post key={post.id} title={post.title} desc={post.body} />;
        })}
      </div>
    );
  }
}

export default BLogPost;
