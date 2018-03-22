import React from 'react';
import './post.css';

export const Post = () => (
  <div className="post">
    <div className="post__header">header</div>
    <img className="post__img" src="https://cdn.vox-cdn.com/thumbor/2SzuuGQHPaDvQCgyy_vKB4BGN60=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57516461/hero.0.0.jpg" alt="" />
    <div className="post__comment">comment section</div>
  </div>
);
