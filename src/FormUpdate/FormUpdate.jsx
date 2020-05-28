import React, { useEffect, useState } from 'react';
import IconButton from '../../src/component/atom/IconButton/IconButton';
import { Link } from 'react-router-dom';
import Button from '../component/atom/Button/Button';
import Axios from 'axios';

const FormUpdate = (props) => {

  const [state, setState] = useState({
    title: '',
    body: '',
    id: 1,
    userId:1 
  });

  useEffect(() => {
    const id = props.match.params.id;
    Axios.get(`http://localhost:3004/posts/${id}`)
      .then((res) =>  setState({
        title: res.data.title,
        body: res.data.body,
        id: res.data.id,
        userId: res.data.userId
      }));
  },[]);

  const heandleChange = () => {
    console.log("ok form");
  };

  const hendleSubmit = () => {
    console.log(state);
  };

  return (
    <div>
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
            onChange={heandleChange}
            value={state.title}
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
            onChange={heandleChange}
            value={state.body}
          ></textarea>
          <Button title="Simpan" classCss="form-add__button" onClick={hendleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default FormUpdate;