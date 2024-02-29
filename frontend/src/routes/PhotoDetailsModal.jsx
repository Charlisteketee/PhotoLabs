import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({
  closeModal,
  photo,
  similarPhotos,
  toggleFavourite,
  favouritePhotosCount,
  favouritePhotos,
}) => {

  // Convert similar_photos object to an array
const similarPhotosArray = Object.values(similarPhotos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Display the main photo */}
      <img src={photo.urls.regular} alt={`Photo id: ${photo.id}`} className="photo-details-modal__image" />
      
      {/* Display header */}
      <div className="photo-details-modal__header">
        <img src={photo.user.profile} alt={"Profile photo"} className="photo-list__user-profile" />
        <div className="photo-list__user-info">{photo.user.name}</div>
        <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
      </div>

      {/* Display similar photos */}
      <div className="photo-details-modal__images">
        <PhotoList
          photos={similarPhotosArray}
          toggleFavourite={toggleFavourite}
          favouritePhotosCount={favouritePhotosCount}
          favouritePhotos={favouritePhotos}
        />
        
      </div>
    </div>
  )
};

export default PhotoDetailsModal;