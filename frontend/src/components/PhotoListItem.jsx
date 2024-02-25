import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <img src={props.photo.imageSource} alt={`Photo id: ${props.photo.id}`} className="photo-list__image"/>
      <div>
        <div className="photo-list__user-details">
          <img src={props.photo.profile} alt={"Profile photo"} className="photo-list__user-profile" />
          <div className="photo-list__user-info">{props.photo.username}</div>
          <div className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
