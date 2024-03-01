import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({
  photos,
  toggleFavourite,
  favouritePhotos,
  openModal,
  handlePhotoClick,
  isModalOpen,
}) => {


  return (
    <ul className="photo-list">
      {/* Map over photos and render PhotoList components */}
      {photos && photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavourite={toggleFavourite}
          favouritePhotos={favouritePhotos}
          openModal={openModal}
          handlePhotoClick={handlePhotoClick}
          isModalOpen={isModalOpen}
        />
    ))}
    </ul>
  );
};

export default PhotoList;