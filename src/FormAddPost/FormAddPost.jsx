import React, { useState } from 'react';
import axios from 'axios';

import Button from '../component/atom/Button/Button';

import './FormAddPost.css';
import IconButton from '../component/atom/IconButton/IconButton';
import { Link } from 'react-router-dom';

const FormAddPost = () => {

  const [post, setPost] = useState({
    id: 1,
    title: '',
    body: '',
    userId: 1
  });

  const heandleChange = (e) => {
    const timeId = new Date().getTime();
    setPost({
      ...post,
      id: timeId,
      [e.target.name]: e.target.value
    });
  };

  const hendleSubmit = () => {
    axios
      .post('http://localhost:3004/posts',post)
      .then(() => {
        alert('Post Sukses Dibuat');
        setPost({
          id: 1,
          userId: 1,
          title: '',
          body: ''
        });
      })
      .catch(() => alert('Maaf Data Gagal Dibuat'));
  };

  return (
    <div className="form-add">
      <Link to="/" >
        <IconButton type="back" classCss="back-icon"/>
      </Link>
      <h1 className="form-add__title">Form</h1>
      <div className="card-form">
        <label className="form-add__label" htmlFor="title">
          Title
        </label>
        <input
          className="form-add__input"
          type="text"
          name="title"
          id="title"
          placeholder="Masukan Title"
          value={post.title}
          onChange={heandleChange}
        />
        <label className="form-add__label" htmlFor="body">
          Isi Post
        </label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          className="form-add__input"
          value={post.body}
          onChange={heandleChange}
        ></textarea>
        <Button title="Simpan" classCss="form-add__button" onClick={hendleSubmit} />
      </div>
    </div>
  );
};

export default FormAddPost;
