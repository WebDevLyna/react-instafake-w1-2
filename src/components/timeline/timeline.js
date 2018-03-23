import React from 'react';
import { Post } from '../post';
import './timeline.css';

const photos = [
  <div className="timeline__post">
    <Post
      owner="WebDevLyna"
      location="Toronto, ON"
      imageUrl="https://cdn.vox-cdn.com/thumbor/2SzuuGQHPaDvQCgyy_vKB4BGN60=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57516461/hero.0.0.jpg" />
  </div>,
  <div className="timeline__post">
    <Post
      owner="WebDevLyna"
      location="Toronto, ON"
      imageUrl="https://cdn.vox-cdn.com/thumbor/2SzuuGQHPaDvQCgyy_vKB4BGN60=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57516461/hero.0.0.jpg" />
  </div>
];

export const Timeline = () => (
  <div className="timeline">
    <div className="timeline__post-container">
      {photos}
    </div>
  </div>
);
