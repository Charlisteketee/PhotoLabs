import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({
  photo,
  toggleFavourite,
  favouritePhotos,
  openModal,
  onPhotoClick 
}) => {
  
  const handlePhotoClick = () => {
    openModal(); // Open the modal
    onPhotoClick(photo); // Pass the photo details to the parent component
  };
  
  return (
    <div className="photo-list__item" >
      <PhotoFavButton
        photoId={photo.id}
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
      />
      <img src={photo.urls.regular} onClick={handlePhotoClick}
        alt={`Photo id: ${photo.id}`}
        className="photo-list__image"
      />
      <div>
        <div className="photo-list__user-details">
          <img src={photo.user.profile}
            alt={"Profile photo"}
            className="photo-list__user-profile"
          />
          <div className="photo-list__user-info">
            {photo.user.name}
          </div>
          <div className="photo-list__user-location">
            {photo.location.city},
            {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
