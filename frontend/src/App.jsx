import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';

const App = () => (
  <div className="App">
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    <HomeRoute />
  </div>
)

export default App;
