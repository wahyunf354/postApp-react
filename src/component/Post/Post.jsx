import React from 'react';
import './Post.css';

const Post = (props) => {
  return (
    <div className='card'>
      <div className='card__image-post'>
        <img src='https://placeimg.com/100/100/any' alt='gambar postingan' />
      </div>
      <div className='card__content-post'>
        <p className='card__title-post'>{props.title}</p>
        <p className='card__desc-post'>{props.desc}</p>
      </div>
    </div>
  );
};

export default Post;
