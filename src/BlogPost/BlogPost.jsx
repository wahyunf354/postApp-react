import React, { Component } from 'react';
import './BLogPost.css';
import Post from '../../src/component/Post/Post';
import axios from 'axios';
import Loading from '../component/atom/Loading/Loading';
import IconButton from '../component/atom/IconButton/IconButton';
import { Link } from 'react-router-dom';
class BLogPost extends Component {
  state = {
    post: [],
    isLoading: false,
  };

  getPostAPI = () => {
    axios
      .get('http://localhost:3004/posts?_sort=id&_order=desc')
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
    axios
      .delete(`http://localhost:3004/posts/${id}`)
      .then(() => {
        alert('Anda Berhasil Menghapus Data!!');
      })
      .catch(() => {
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
        <Link to='/add'>
          <IconButton type="add" classCss="add-post__button"/>
        </Link>
      </div>
    );
  }
}

export default BLogPost;
