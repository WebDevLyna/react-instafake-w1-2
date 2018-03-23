import React from 'react';
import { Post } from '../post';
import './timeline.css';

const photos = [
  {
    //Object array
    owner: 'sweetnamese',
    location: "Toronto, ON",
    imageUrl: "https://cdn.vox-cdn.com/thumbor/2SzuuGQHPaDvQCgyy_vKB4BGN60=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57516461/hero.0.0.jpg"
  },
  {
    owner: 'stacy',
    location: "Brampton, ON",
    imageUrl: "https://www.omnicoreagency.com/wp-content/uploads/2015/10/Instagram.jpg"
  },
  {
    owner: 'antonio',
    location: "Woodbridge, ON",
    imageUrl: "https://i.amz.mshcdn.com/PRqWLssePCJ0AknJV5dmnTeiaKQ=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F484914%2F79d9fa6b-11dd-4dda-b2dc-9d4feed74f8e.jpg"
  },
];

export const Timeline = () => (
  <div className="timeline">
    <div className="timeline__post-container">

      {/* Map loops the object */}
      {photos.map(post => (
        <div className="timeline__post">
          <Post
            owner={post.owner}
            location={post.location}
            imageUrl={post.imageUrl}
          />
        </div>
      ))};

    </div>
  </div>
);

// const photos = [
//   <div className="timeline__post">
//     <Post
//       owner="WebDevLyna"
//       location="Toronto, ON"
//       imageUrl="https://cdn.vox-cdn.com/thumbor/2SzuuGQHPaDvQCgyy_vKB4BGN60=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57516461/hero.0.0.jpg" />
//   </div>,
//   <div className="timeline__post">
//     <Post
//       owner="WebDevLyna"
//       location="Toronto, ON"
//       imageUrl="https://cdn.vox-cdn.com/thumbor/2SzuuGQHPaDvQCgyy_vKB4BGN60=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57516461/hero.0.0.jpg" />
//   </div>
// ];
