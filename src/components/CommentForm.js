import React, { useState } from 'react';

const CommentForm = ({ addComment }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Add a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
