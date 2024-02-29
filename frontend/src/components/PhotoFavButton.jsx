import React, { useCallback } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, favouritePhotos = [], toggleFavourite }) {
 const isSelected = favouritePhotos.includes(photoId);

 const handleClick = useCallback(() => {
    // Call the toggleFavourite function passed as a prop
    toggleFavourite(photoId);
 }, [toggleFavourite, photoId]);

 return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {/* Pass the isSelected state to FavIcon component */}
        <FavIcon selected={isSelected} />
      </div>
    </div>
 );
}

export default PhotoFavButton;
