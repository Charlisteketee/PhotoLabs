import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';


const TopNavigation = ({ topics, favouritePhotosCount, handleTopicClick }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} handleTopicClick={handleTopicClick}/>
      <FavBadge count={favouritePhotosCount}/>
    </div>
  )
}

export default TopNavigation;