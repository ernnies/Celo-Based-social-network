import React from 'react';

const FollowButton = ({ isFollowing, toggleFollow }) => {
  return (
    <button onClick={toggleFollow}>
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowButton;
