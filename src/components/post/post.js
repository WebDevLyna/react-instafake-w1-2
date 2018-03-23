import React from 'react';
import './post.css';

export const Post = (props) => (
  <div className="post">
    <div className="post__header">
      <img className="post__profile-img" src={props.profileUrl} />
      <b>{props.owner}</b>
      <br/>{props.location}
    </div>
    <img className="post__img" src={props.imageUrl} alt="" />
    <div className="post__comment">
      <p><b>{props.owner}</b></p>
      <p>{props.comments.map((userComment) => (
          <div>
            <p><b>{userComment.owner}</b>: {userComment.text}</p>
          </div>
        ))}
      </p>
    </div>
  </div>
);
