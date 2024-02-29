import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ toggleFavourite }) {
 // state to track if the heart icon is selected
 const [isSelected, setIsSelected] = useState(false);

 const handleClick = useCallback(() => {
    // Toggle the heart icon's selected state
    setIsSelected(prevIsSelected => !prevIsSelected);
    // Call the toggleFavourite function passed as a prop
    toggleFavourite();
 }, [toggleFavourite]);

 return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {/* pass isSelected state to FavIcon component */}
        <FavIcon selected={isSelected} />
      </div>
    </div>
 );
}

export default PhotoFavButton;
