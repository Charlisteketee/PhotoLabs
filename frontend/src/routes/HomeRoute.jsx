import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({
  topics,
  photos,
  // toggleModal,
  openModal,
  onPhotoClick,
  toggleFavourite,
  favouritePhotosCount,
  favouritePhotos
}) => {

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favouritePhotosCount={favouritePhotosCount}
      />
      <PhotoList
        photos={photos}
        toggleFavourite={toggleFavourite}
        favouritePhotos={favouritePhotos}
        // toggleModal={toggleModal}
        openModal={openModal}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;