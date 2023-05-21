import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      <p>{comment.content}</p>
      {/* Display other comment information */}
    </div>
  );
};

export default Comment;
