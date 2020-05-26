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

  getPostAPI = () => {
    axios
      .get('http://localhost:3004/posts')
      .then((result) => this.setState({ post: result.data, isLoading: false }));
  };

  componentDidMount() {
    this.setState({
      post: [],
      isLoading: true,
    });
    this.getPostAPI();
  }

  animate = (e) => {
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

  hendleRemove = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3004/posts/${id}`)
      .then((res) => {
        console.log(res);
        alert('Anda Berhasil Menghapus Data!!');
      })
      .catch((err) => {
        console.log(err);
        alert('Anda Tidak Berhasil Menghapus Data');
      });
    this.getPostAPI();
  };

  render() {
    return (
      <div className='container'>
        <p className='container__title'>Blog Post</p>
        {this.state.isLoading ? <Loading /> : ''}
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.hendleRemove} />;
        })}
      </div>
    );
  }
}

export default BLogPost;
