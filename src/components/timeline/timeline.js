import React from 'react';
import { Post } from '../post';
import './timeline.css';

const posts = [
  {
    //Object array
    profileUrl: "https://pbs.twimg.com/profile_images/430583461909233665/Qka1Zm_o_400x400.jpeg",
    owner: 'sweetnamese',
    location: "Toronto, ON",
    imageUrl: "https://cdn.vox-cdn.com/thumbor/2SzuuGQHPaDvQCgyy_vKB4BGN60=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57516461/hero.0.0.jpg",
    comments: [
      {
        owner: 'tom',
        text: "This is comment number 1"
      },
      {
        owner: 'jerry',
        text: "I like your photo"
      }
    ]
  },
  {
    profileUrl: "https://assets.teenvogue.com/photos/583345cc5e8102342c84bc39/master/w_757,c_limit/giphy-6.gif",
    owner: 'teklyn',
    location: "Scarborough, ON",
    imageUrl: "https://www.omnicoreagency.com/wp-content/uploads/2015/10/Instagram.jpg",
    comments: [
      {
        owner: 'tom',
        text: "This is comment number 1"
      },
      {
        owner: 'jerry',
        text: "I like your photo"
      }
    ]
  },
  {
    profileUrl: "http://www.geocities.ws/silver_icecrystal/tuxmaskwroses.jpg",
    owner: 'antonio',
    location: "Woodbridge, ON",
    imageUrl: "https://i.amz.mshcdn.com/PRqWLssePCJ0AknJV5dmnTeiaKQ=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F484914%2F79d9fa6b-11dd-4dda-b2dc-9d4feed74f8e.jpg",
    comments: [
      {
        owner: 'tom',
        text: "This is comment number 1"
      },
      {
        owner: 'jerry',
        text: "I like your photo"
      }
    ]
  },
];

export const Timeline = () => (
  <div className="timeline">
    <div className="timeline__post-container">

      {/* Map loops the object */}
      {posts.map(post => (
        <div className="timeline__post">
          <Post
            profileUrl={post.profileUrl}
            owner={post.owner}
            location={post.location}
            imageUrl={post.imageUrl}
            comments={post.comments}
          />
        </div>
      ))}

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
