import React from "react";

import "../styles/TopicListItem.scss";


// could try onTopicClick(topic. ? ) - check the schema in browser for similar topics
const TopicListItem = ( {topic, onTopicClick }) => {
  return (
    <div className="topic-list__item"  onClick={() => onTopicClick(topic.id)}>
      <p>{topic.title}</p>
    </div>
  );
};

export default TopicListItem;
