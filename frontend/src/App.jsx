import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // state to manage the visibility of the modal
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State to hold the selected photo
  const [similarPhotos, setSimilarPhotos] = useState([]); // state to hold similar photos related to the selected photo
  const [favouritePhotos, setFavouritePhotos] = useState([]); // State to track favorited photos


  // function to toggle visibility of the modal, toggling the state between true and false
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

 const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo); // Update the selected photo state with the clicked photo
    setSimilarPhotos(photo.similar_photos); // Set similar photos to display in modal
    toggleModal(); // Open the modal
 };

   // Function to toggle favorite status of a photo
   const toggleFavourite = (photoId) => {
     if (favouritePhotos.includes(photoId)) {
       setFavouritePhotos(favouritePhotos.filter(id => id !== photoId));
     } else {
       setFavouritePhotos([...favouritePhotos, photoId]);
     }
   };
 
   // Calculate the count of favorited photos
   const favouritePhotosCount = favouritePhotos.length;

 return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        toggleModal={toggleModal}
        onPhotoClick={handlePhotoClick}
        toggleFavourite={toggleFavourite}
        favouritePhotosCount={favouritePhotosCount}
      />
      {isModalOpen && <PhotoDetailsModal
        closeModal={toggleModal}
        photo={selectedPhoto}
        similarPhotos={similarPhotos}
        toggleFavourite={toggleFavourite}
        favouritePhotosCount={favouritePhotosCount}
      />}
    </div>
 );
};

export default App;