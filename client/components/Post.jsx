import React from 'react';

const Post = (props) => {
  return (
    <div className='post'>
      <h3 className='postTitle'>{props.post.title}</h3>
      <h4 className='postOwner'>{props.post.owner}</h4>
      <p className='postContent'>{props.post.content}</p>
    </div>
  );
};

export default Post;
