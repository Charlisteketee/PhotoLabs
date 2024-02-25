import React from 'react';

 // import PhotoListItem from './components/PhotoListItem';
 import PhotoList from './components/PhotoList';
//  import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';
 import './App.scss';

 const App = () => (
   <div className="App">
     {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
     <PhotoList/>
     <TopicList />
   </div>
 )

export default App;
