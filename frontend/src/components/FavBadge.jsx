import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ count }) => {
  return (
    <div className='fav-badge'>
      {/* Render the FavIcon component and pass the count prop */}
      <FavIcon count={count} selected={true} />
      {/* Conditionally render the count if it's greater than 0 */}
      {count > 0 && <span className='fav-badge__count'>{count}</span>}
    </div>
  ) 
};

export default FavBadge;