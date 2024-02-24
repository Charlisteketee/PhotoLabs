import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list-item">
      <img src={props.imageSource} alt={`Photo id: ${props.id}`} className="photo"/>
      <div>
        <div className="user-profile">
          <img src={props.profile} className="profile-picture" />
          <div className="username">{props.username}</div>
          <div className="location">{props.location.city}, {props.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
