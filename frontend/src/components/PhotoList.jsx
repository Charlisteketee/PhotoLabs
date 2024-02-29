import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = ({ photos, toggleFavourite, favouritePhotos, toggleModal, onPhotoClick,  }) => {


console.log("Photos:", photos);  return (
    <ul className="photo-list">
      {/* Map over mock photos and render PhotoList components */}
      {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} toggleFavourite={toggleFavourite} favouritePhotos={favouritePhotos} toggleModal={toggleModal} onPhotoClick={onPhotoClick}/>
      ))}
    </ul>
  );
};

export default PhotoList;
