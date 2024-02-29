import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {
  const {
    state: {
      isModalOpen,
      selectedPhoto,
      similarPhotos,
      favouritePhotos,
      favouritePhotosCount,
    },
    actions: {
      // toggleModal, // used to open and close the modal
      openModal,
      closeModal,
      handlePhotoClick, // used when user selects a photo
      toggleFavourite, // sets the favourite photos
    },
 } = useApplicationData(); // Use the hook


 return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        // toggleModal={toggleModal}
        openModal={openModal}
        onPhotoClick={handlePhotoClick}
        toggleFavourite={toggleFavourite}
        favouritePhotosCount={favouritePhotosCount}
        favouritePhotos={favouritePhotos}
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