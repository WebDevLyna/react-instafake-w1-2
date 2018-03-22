import React from 'react';
import './post.css';

export const Post = (props) => (
  <div className="post">
    <div className="post__header">
      <b>{props.owner}</b>
      <br/>{props.location}
    </div>
    <img className="post__img" src={props.imageUrl} alt="" />
    <div className="post__comment">comment section</div>
  </div>
);
