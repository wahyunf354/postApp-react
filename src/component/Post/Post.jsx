import React from 'react';
import './Post.css';
import Button from '../atom/Button/Button';
import { Link } from 'react-router-dom';

const Post = ({ remove, data }) => {
  return (
    <div className="card">
      <div className="card__image-post">
        <img src="https://placeimg.com/100/100/any" alt="gambar postingan" />
      </div>
      <div className="card__content-post">
        <p className="card__title-post">{data.title}</p>
        <p className="card__desc-post">{data.body}</p>
        <Button classCss="card__button__danger" onClick={() => remove(data.id)} title="Remove"/>
        <Link to={`/update/${data.id}`} >
          <Button classCss="card__button__danger" title="Edit"/>
        </Link>
      </div>
    </div>
  );
};

export default Post;
