import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, toggleFavourite }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFavourite={() => toggleFavourite(photo.id)} />      <img src={photo.urls.regular} alt={`Photo id: ${photo.id}`} className="photo-list__image"/>
      <div>
        <div className="photo-list__user-details">
          <img src={photo.user.profile} alt={"Profile photo"} className="photo-list__user-profile" />
          <div className="photo-list__user-info">{photo.user.name}</div>
          <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
