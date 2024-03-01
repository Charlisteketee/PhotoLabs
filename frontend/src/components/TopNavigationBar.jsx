import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import DarkMode from './DarkMode';
import FavBadge from './FavBadge';


const TopNavigation = ({
  topics,
  favouritePhotosCount,
  handleTopicClick,
  darkMode,
  toggleDarkMode,
}) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} handleTopicClick={handleTopicClick}/>
      <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <FavBadge count={favouritePhotosCount}/>
    </div>
  )
}

export default TopNavigation;