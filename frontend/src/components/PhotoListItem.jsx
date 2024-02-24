import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list-item">
      <img src={props.photo.imageSource} alt={`Photo id: ${props.photo.id}`} className="photo"/>
      <div>
        <div className="user-profile">
          <img src={props.photo.profile} alt={"Profile photo"} className="profile-picture" />
          <div className="username">{props.photo.username}</div>
          <div className="location">{props.photo.location.city}, {props.photo.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
