import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {/* Map over mock photos and render PhotoList components */}
      {props.photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

export default PhotoList;
