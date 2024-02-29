import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = ({ photos, toggleFavourite, favouritePhotos }) => {
  return (
    <ul className="photo-list">
      {/* Map over mock photos and render PhotoList components */}
      {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} toggleFavourite={toggleFavourite} favouritePhotos={favouritePhotos}/>
      ))}
    </ul>
  );
};

export default PhotoList;
