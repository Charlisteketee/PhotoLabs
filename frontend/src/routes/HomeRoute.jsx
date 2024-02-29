import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos }) => {
  // State to track favorited photos
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  // Function to toggle favorite status of a photo
  const toggleFavourite = (photoId) => {
    console.log(`Toggling favourite for photoId: ${photoId}`);

    if (favouritePhotos.includes(photoId)) {
      setFavouritePhotos(favouritePhotos.filter(id => id !== photoId));
    } else {
      setFavouritePhotos([...favouritePhotos, photoId]);
    }
    console.log(`New favouritePhotos state: ${favouritePhotos}`);

  };

  // Calculate the count of favorited photos
  const favouritePhotosCount = favouritePhotos.length;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritePhotosCount={favouritePhotosCount} />
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} favouritePhotos={favouritePhotos}/>
    </div>
  );
};

export default HomeRoute;

