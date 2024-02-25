import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = Array.from({ length: 3 });

  const sampleDataForPhotoListItem = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };
  //      <PhotoListItem key={sampleDataForPhotoListItem.id} photo={sampleDataForPhotoListItem} />

  return (
    <div className="App">
      {/* Use .map() to iterate over the array and render PhotoListItem 3 times */}
      {photos.map((_, index) => (
      <PhotoListItem className=".photo-list" key={sampleDataForPhotoListItem.id} photo={sampleDataForPhotoListItem} />
      ))}
    </div>
  );
};

export default App;
