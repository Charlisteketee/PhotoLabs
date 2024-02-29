import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  return (
     <div className="App">
       <HomeRoute photos={photos} topics={topics} toggleModal={() => setIsModalOpen(true)} />
       {isModalOpen && <PhotoDetailsModal closeModal={() => setIsModalOpen(false)} />}
     </div>
  );
 };

export default App;
