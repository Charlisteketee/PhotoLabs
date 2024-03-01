import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {
  const {
    state: {
      isModalOpen,
      selectedPhoto,
      similarPhotos,
      favouritePhotos,
      favouritePhotosCount,
      photoData,
      topicData,
      error,
    },
    actions: {
      openModal,
      closeModal,
      handlePhotoClick,
      toggleFavourite,
      handleTopicClick,
    },
 } = useApplicationData();


 return (
    <div className="App">
      {error && <div className="error-message">{error}</div>} {/* Display error message */}
      <HomeRoute
        photos={photoData}
        topics={topicData}
        openModal={openModal}
        onPhotoClick={handlePhotoClick}
        toggleFavourite={toggleFavourite}
        favouritePhotosCount={favouritePhotosCount}
        favouritePhotos={favouritePhotos}
        handleTopicClick={handleTopicClick}
      />
      {isModalOpen && <PhotoDetailsModal
        closeModal={closeModal}
        photo={selectedPhoto}
        similarPhotos={similarPhotos}
        toggleFavourite={toggleFavourite}
        favouritePhotosCount={favouritePhotosCount}
        favouritePhotos={favouritePhotos}
      />}
    </div>
 );
};

export default App;