import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({
  closeModal,
  photo,
  similarPhotos,
  toggleFavourite,
  favouritePhotosCount,
  favouritePhotos,
  openModal,
  isModalOpen,
  handlePhotoClick
}) => {

  return (
    <div className="photo-details-modal">
      <div className='photo-details-modal__top-bar'>
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        {/* Display the main photo */}
        <img src={photo.urls.regular} alt={`Photo id: ${photo.id}`} className="photo-details-modal__image" />
      </div>
     
      {/* Display header */}
      <div className="photo-details-modal__photographer-details">
        <img src={photo.user.profile} alt={`${photo.user.name}'s profile photo`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">{photo.user.name}</div>
        <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
      </div>

      {/* Display similar photos */}
      <div className="photo-details-modal__images">
      <h2 className='photo-details-modal__header'>Similar Photos</h2>

        <PhotoList
          photos={similarPhotos}
          toggleFavourite={toggleFavourite}
          favouritePhotosCount={favouritePhotosCount}
          favouritePhotos={favouritePhotos}
          isModalOpen={isModalOpen}
          openModal={openModal}
          handlePhotoClick={handlePhotoClick}
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;