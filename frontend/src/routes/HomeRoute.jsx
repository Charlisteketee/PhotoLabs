import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({
  topics,
  photos,
  openModal,
  handlePhotoClick,
  toggleFavourite,
  favouritePhotosCount,
  favouritePhotos,
  handleTopicClick,
}) => {

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favouritePhotosCount={favouritePhotosCount}
        handleTopicClick={handleTopicClick}
      />
      <PhotoList
        photos={photos}
        toggleFavourite={toggleFavourite}
        favouritePhotos={favouritePhotos}
        openModal={openModal}
        handlePhotoClick={handlePhotoClick}
      />
    </div>
  );
};

export default HomeRoute;