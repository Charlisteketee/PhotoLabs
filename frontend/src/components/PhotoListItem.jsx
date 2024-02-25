import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img src={props.photo.urls.regular} alt={`Photo id: ${props.photo.id}`} className="photo-list__image"/>
      <div>
        <div className="photo-list__user-details">
          <img src={props.photo.user.profile} alt={"Profile photo"} className="photo-list__user-profile" />
          <div className="photo-list__user-info">{props.photo.user.name}</div>
          <div className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
