import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({
  photos,
  toggleFavourite,
  favouritePhotos,
  openModal,
  onPhotoClick,
  isModalOpen,
}) => {

  return (
    <ul className="photo-list">
      {/* Map over photos and render PhotoList components */}
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavourite={toggleFavourite}
          favouritePhotos={favouritePhotos}
          openModal={openModal}
          onPhotoClick={onPhotoClick}
          isModalOpen={isModalOpen}
        />
    ))}
    </ul>
  );
};

export default PhotoList;