import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State to hold the selected photo


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
 };

 const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo); // Update the selected photo state
    toggleModal(); // Open the modal
 };

 return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleModal={toggleModal} onPhotoClick={handlePhotoClick} />
      {isModalOpen && <PhotoDetailsModal closeModal={toggleModal} photo={selectedPhoto} />}
    </div>
 );
 };

export default App;
