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
      .get('http://localhost:3004/posts')
      .then((result) => this.setState({ post: result.data, isLoading: false }));
  }

  hendleRemove = (e) => {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement('span');
    ripples.style.left = `${x}px`;
    ripples.style.top = `${y}px`;
    e.target.appendChild(ripples);
    setTimeout(() => {
      ripples.remove();
    }, 1000);
  };

  render() {
    return (
      <div className='container'>
        <p className='container__title'>Blog Post</p>
        {this.state.isLoading ? <Loading /> : ''}
        {this.state.post.map((post) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              desc={post.body}
              remove={this.hendleRemove}
            />
          );
        })}
      </div>
    );
  }
}

export default BLogPost;
